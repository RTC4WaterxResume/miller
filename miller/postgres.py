import re
from django.contrib.postgres.search import SearchQuery

class RawSearchQuery(SearchQuery):
  """
  Extends SearchQuery to allow to_tsquery instead of plainto_tsquery
  """
  # transform and in AND, or in OR
    # e.g. claude & juncker or claude AND
    # then throw away all punctuation and AND and OR
    # substitute * with :*
  parsed_value = ''

  def qparse(self, query):
    query = query.strip()
    # 1 check for ANDS or &
    ands = re.split(r'\s+or\s+|\s+&\s+', query, flags=re.IGNORECASE)
    if len(ands) > 1:
      return ' & '.join(map(lambda x: self.qparse(x), ands))

    ors = re.split(r'\s+or\s+|,', query, flags=re.IGNORECASE)
    if len(ors)>1:
      return ' | '.join(map(lambda x: self.qparse(x), ors))

    # substitute :* or * if they are at the end of a word
    query = ':* '.join(re.split(r'\:\*\s+|\*\s+', query, flags=re.IGNORECASE))
    # clean
    query = re.sub(r'[\?\(\)\|\&]', '', query)

    # concat spaces.
    return ' & '.join(re.split(r'\s+', query))

  def as_sql(self, compiler, connection):
    if not self.parsed_value:
      self.parsed_value = self.qparse(self.value)
    params = [self.parsed_value]

    if self.config:
        config_sql, config_params = compiler.compile(self.config)
        template = 'to_tsquery({}::regconfig, %s)'.format(config_sql)
        params = config_params + [self.parsed_value]
    else:
        template = 'to_tsquery(%s)'
    if self.invert:
        template = '!!({})'.format(template)
    return template, params