import json
from django.conf import settings
from miller.api.serializers import HeavyProfileSerializer

# inject some miller specific settings used by angular
def default(request):
  profile = HeavyProfileSerializer(request.user.profile).data if hasattr(request.user, 'profile') else {
    'authors': []
  }

  context_settings = {
    'title': settings.MILLER_TITLE,
    'debug': settings.MILLER_DEBUG,
    'settings': json.dumps(settings.MILLER_SETTINGS),
    'oembeds': json.dumps(settings.MILLER_OEMBEDS),
    'profile': json.dumps( profile )
  }
  return context_settings