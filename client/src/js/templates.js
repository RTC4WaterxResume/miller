angular.module("miller").run(["$templateCache", function($templateCache) {$templateCache.put("/static/templates/author.html","<h2>{{profile.user.first_name}} {{profile.user.last_name}} <span ng-if=\'isMe\'>(you)</span></h2>\n<div class=\'type\'>author</div>\n<div markdown=\'profile.bio|| \"...\"\'></div>\n<div ui-view></div>");
$templateCache.put("/static/templates/author.publications.html","<h3 ng-if=\'isMe\' translate=\"me.publications\"></h3>\n<h3 ng-if=\'!isMe\' translate=\"latest publications\"></h3>\n<!-- Nav tabs -->\n  <ul class=\'nav nav-tabs\'>\n    <li ng-repeat=\'link in urls\' role=\"presentation\" ui-sref-active=\"active\">\n      <a href ui-sref=\'me.publications.{{link.name}}\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" translate=\"{{link.name}}\"></a>\n    </li>\n    \n    <li ng-if=\'isMe\' ui-sref-active=\"active\">\n      <a href ui-sref=\'me.publications.drafts\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" translate=\"drafts\"></a>\n    </li>\n  </ul>\n  \n\n<div ui-view></div>");
$templateCache.put("/static/templates/authors.html","\n<h2 translate=\"headline.authors\"></h2>\n<ul class=\"nav nav-tabs ng-scope\">\n</ul>\n<div ui-view>\n  <div class=\'post\' ng-repeat=\'profile in items\'>\n    <div class=\'wrapper\'>\n      <div ng-if=\"!$first\" class=\"divider ng-scope\"></div>\n      <div class=\'tags\'><span class=\'tag\'>author</span></div>\n      <h3><a ui-sref=\"author.publications({username: profile.user.username})\">{{profile.user.first_name}} {{profile.user.last_name}}</a></h3>\n      <div class=\'type\'>{{profile.user.username}}</div>\n      <div markdown=\'profile.bio|| \"...\"\'></div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/static/templates/blog.html","<h2>news</h2>\n<!-- Nav tabs -->\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li role=\"presentation\" ui-sref-active=\"active\"><a href ui-sref=\'blog.everything\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">everything</a></li>\n  <li role=\"presentation\" ui-sref-active=\"active\"><a href ui-sref=\'blog.events\' aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">events</a></li>\n</ul>\n\n<div ui-view></div>");
$templateCache.put("/static/templates/draft.html","\n\n<!-- <span class=\'btn-line-group\'><button class=\'btn-line active\' ng-click=\'save()\'>{{isSaving? \"saving...\":\"save\"}}</button></span> -->\n<label translate=\"field.label.title\">title</label>\n<textarea id=\'draft-title\' class=\'elastic-textarea\' rows=\"1\" msd-elastic ng-model=\'title\' type=\'text\' placeholder=\'Untitled\'></textarea>\n<label translate=\"field.label.abstract\"></label>\n\n  <textarea id=\'draft-abstract\' class=\'elastic-textarea\' rows=\"1\" msd-elastic ng-model=\'abstract\' type=\'text\' placeholder=\'abstract\'></textarea>\n\n\n<div class=\'actions\' ng-if=\'!isDraft\'>\n  <!-- <div ng-if=\'metadata.owner.is_staff\' class=\'btn-line-group\'> -->\n  \n  <div class=\'btn-line-group primary\'>\n    <button ng-if=\'id\' class=\'btn-line\' ui-sref=\"story({postId: id})\" translate=\"button.viewmode\"></button>\n  </div>\n  <!-- </div> -->\n  \n</div>\n\n<div class=\'section\' ng-if=\'user.is_staff\'>\n  <label translate=\"staff.drafts.tags.placeholder\"></label>\n  <tags-input class=\'tags-input\' placeholder=\'{{\"staff.drafts.tags.placeholder\"| translate}}\' on-tag-added=\'attachTag($tag)\' on-tag-removed=\'detachTag($tag)\' key-property=\'id\' display-property=\'name\' ng-model=\"displayedTags\" add-from-autocomplete-only=\"true\">\n    <auto-complete source=\"suggestTags($query, {category__in:[\'blog\',\'writing\', \'highlights\']})\" ></auto-complete>\n\n  </tags-input>\n</div>\n\n<div class=\'section\' style=\'margin-bottom:20px\' ng-if=\'!isDraft && user.is_staff\'>\n  <label translate=\"drafts.keywords.placeholder\"></label>\n  <tags-input class=\'tags-input\' placeholder=\'{{\"drafts.keywords.placeholder\"| translate}}\' key-property=\'id\' display-property=\'name\' ng-model=\"tags\">\n    <auto-complete source=\"suggestTags($query, {category:\'keyword\'})\"></auto-complete>\n\n  </tags-input>\n</div>\n\n<div class=\'authors\' ng-if=\'!isDraft\'>\nby <a href>{{metadata.owner.username}}</a>\n</div>\n<div class=\'authors\' ng-if=\'isDraft\'>\n  <div ng-if=\'user.username\'>\n    by <a href>{{user.username}}</a>\n  </div>\n  <div ng-if=\'!user.username\'>\n    by <a href>anonymous</a>\n  </div>\n</div>\n\n<!-- <div ng-if=\'!isDraft\'>\n  <form class=\"form-inline\">\n    <div class=\"form-group\">\n      <label translate=\'date\'></label>\n      <input type=\"text\" class=\"form-control\" ng-model=\"date\" name=\"date\" data-max-date=\"today\" timezone=\'UTC\' bs-datepicker data-autoclose=\"1\">{{date}}\n    </div>\n  </form>\n</div> -->\n\n<div id=\"draft-contents\">\n\n  <div style=\'min-height: 50px; position:relative\'>\n      <!-- <medium-editor ng-model=\'contents\' bind-options=\"mediumOptions\"></medium-editor> -->\n      \n      <div mde=\'contents\' setdocs=\'setDocuments(documents)\' settoc=\'setToC(items)\'></div>\n      \n  </div>\n</div>");
$templateCache.put("/static/templates/events.html","<h2>events</h2>\n<!-- Nav tabs -->\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li role=\"presentation\" ui-sref-active=\"active\"><a href ui-sref=\'events.everything\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">everything</a></li>\n  <li role=\"presentation\" ui-sref-active=\"active\"><a href ui-sref=\'events.events\' aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">working seminars</a></li>\n</ul>\n\n<div ui-view></div>");
$templateCache.put("/static/templates/index.html","\n<div class=\"row\">\n  <div class=\"col-md-8\">\n\n    <!-- CONVER STORY -->\n    <div class=\"coverstory story lite\">\n      <div class=\"tags\" ng-if=\"coverstory.tags.length\">\n        <span class=\"tag\" ng-repeat=\'tag in coverstory.tags\' ng-if=\'tag.category == \"writing\"\' ng-include=\'\"templates/partials/tag.html\"|prefixTemplate\'></span>\n      </div>\n\n      <h3><a href ui-sref=\"story({postId: coverstory.id})\">{{coverstory.title}}</a></h3>\n      <blockquote>{{coverstory.excerpt}} <a href ui-sref=\"story({postId: coverstory.id})\"><span class=\'icon-arrow-right-circle\'></span></a></blockquote>\n      <div class=\'authors\' ng-if=\"coverstory.authors.length\">\n        by <span ng-repeat=\'author in coverstory.authors\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n      </div>\n\n      <div ng-if=\'coverstory.cover\'>\n        <div class=\'cover\' style=\'background-size: cover; height:300px; background-image:url({{coverstory.cover}})\'></div>\n      </div>\n\n      \n    </div>\n\n    \n    <div class=\"row\">\n    <!-- REMAINING STORIES -->\n      <div ng-repeat=\'story in otherstories\' class=\"col-md-6\">\n        <div class=\"coverstory other\">\n          <div class=\"divider\"></div>\n          <div class=\"tags\" ng-if=\"story.tags.length\">\n            <span  class=\'tag\' ng-repeat=\'tag in story.tags|filter:\"public\"\' ng-include=\'\"templates/partials/tag.html\"|prefixTemplate\'></span>\n          </div>\n          <h4><a href ui-sref=\"story({postId: story.id})\">{{story.title}}</a></h4>\n          \n          <blockquote class=\"reduced\">{{story.excerpt}} <span class=\'icon-arrow-right-circle\'></span></blockquote>\n          <div class=\'authors\' ng-if=\"coverstory.authors.length\">\n            by <span ng-repeat=\'author in coverstory.authors\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-md-4\">\n    <div ng-repeat=\'story in news\'>\n        <div class=\"coverstory news\">\n          <div ng-if=\'!$first\' class=\"divider\"></div>\n          <div class=\"date\">{{story.date_created|date:\'mediumDate\'}}</div>\n          <h4><a href ui-sref=\"story({postId: story.id})\">{{story.title}}</a></h4>\n\n          <div class=\'authors\' ng-if=\"coverstory.authors.length\">\n        by <span ng-repeat=\'author in coverstory.authors\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n      </div>\n          <blockquote class=\"reduced\">{{story.excerpt}} <span class=\'icon-arrow-right-circle\'></span></blockquote>\n          \n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>");
$templateCache.put("/static/templates/items.html","<div ng-repeat=\'story in items\' ng-include=\'\"templates/partials/story.html\"|prefixTemplate\'></div>");
$templateCache.put("/static/templates/login.html","login\n\n<div class=\'btn-group\'>\n  <a href=\'/auth/twitter\' class=\'btn btn-default\'>connect with twitter</a>\n  <a  class=\'btn btn-default\'>connect with google</a>\n</div>\n");
$templateCache.put("/static/templates/md.html","<div markdownit=\'md\' language=\'language\' settoc=\'setToC(ToC)\'></div>");
$templateCache.put("/static/templates/publications.articles.html","publications.articles.html");
$templateCache.put("/static/templates/publications.html","<h1 translate=\"headline.publications.title\"></h1>\n\n<blockquote translate=\"headline.publications.abstract\"></blockquote>\n\n\n<!-- Nav tabs -->\n<ul class=\'nav nav-tabs\'>\n  <li ng-repeat=\'link in urls\' role=\"presentation\" ui-sref-active=\"active\">\n    <a href ui-sref=\'publications.{{link.name}}\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" translate=\"state.publications.{{link.name}}.label\"></a>\n  </li>\n</ul>\n\n\n<div ui-view></div>\n<!-- <div class=\'row\'>\n  \n  <div class=\'col-md-4\'>\n    <h2 class=\'no-margin-top\' translate=\'state.{{state}}.title\'></h2>\n    <p class=\"small\" translate=\'state.{{state}}.abstract\'></p>\n  </div>\n  <div class=\'col-md-8\'>\n    <div ui-view></div>\n  </div>\n</div> -->\n");
$templateCache.put("/static/templates/story.html","<div class=\"story\">\n  <div class=\"actions\" ng-if=\'story.isWritable\'>\n    <div class=\'btn-line-group primary\'>\n      <button  class=\'btn-line\' nref ui-sref=\'writing({storyId:story.id})\'>edit</button>\n    </div>\n\n    <div ng-if=\'user.is_staff\' class=\'btn-line-group\'>\n      <button class=\'btn-line\' ng-click=\'setStatus(\"draft\")\' ng-class=\'{\"active warning\": story.status==\"draft\"}\' translate=\"story.status.draft\"></button>\n      <button class=\'btn-line\' ng-click=\'setStatus(\"public\")\' ng-class=\'{\"active\": story.status==\"public\"}\' translate=\"story.status.public\"></button>\n    </div>\n\n  </div>\n  <div class=\'row\'>\n    <div class=\'col-md-8\'>\n      <div class=\'overlay\'>\n        \n\n        <div class=\"tags\" >\n          <span ng-if=\"story.tags.length\" class=\'tag sans-serif\' ng-repeat=\'tag in story.tags|filter:\"public\"\' ng-include=\'\"templates/partials/tag.html\"|prefixTemplate\'></span>\n          \n        </div>\n        <div class=\'authors\' ng-if=\"story.authors.length\">\n          by <span ng-repeat=\'author in story.authors\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n        </div>\n        <h1>{{story.title}}</h1>\n\n\n        <blockquote>\n          {{story.abstract}}\n        </blockquote>\n        \n        <div ng-if=\'story.covers.length\' class=\"cover\">\n          <div ng-repeat=\'document in story.covers\'>\n            <div ng-include=\'\"templates/partials/document.image.html\"|prefixTemplate\'></div>\n            <div ng-include=\'\"templates/partials/document.metadata.html\"|prefixTemplate\'\'></div>\n          </div>\n        </div>\n        \n        <div class=\"contents\">\n         <div markdownit=\'story.contents\' listener=\'listener(event, data, callback)\' settoc=\'setToC(ToC)\' setdocs=\'setDocuments(items)\'></div>\n        </div>\n\n        <div style=\'margin-top: 50px\' disqus=\"story.slug\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("/static/templates/partials/author.html","<a class=\'author\' ui-sref=\'author.publications({username:author.username})\'>{{author.first_name}} {{author.last_name}}</a>{{$last?\'\':\', \'}}");
$templateCache.put("/static/templates/partials/breakingNews.html","<div class=\"wrapper\" style=\'    background-size: cover; background-image: url({{news.cover_url}})\'>\n  <div class=\'overlay\'>\n    <div class=\"type\">\n      <span ng-repeat=\'tag in news.tags\' ng-if=\'tag.category == \"writing\"\' ng-include=\'\"templates/partials/tag.html\"|prefixTemplate\'></span>\n    </div>\n    <h3><a ui-sref=\"story({postId: news.id})\">{{news.title}}</a></h3>  \n  </div>\n</div>");
$templateCache.put("/static/templates/partials/document.html","\n<div class=\'doc doc-{{document.type}} {{document.isSelected?\"active\":\"\"}}\' ng-click=\'selectDocument(document)\'>\n  <div class=\'divider\'>&nbsp;</div>\n\n  <div ng-if=\'document.type==\"image\"\' ng-include=\'\"templates/partials/document.image.html\"|prefixTemplate\'></div>\n\n  <div ng-if=\'document.metadata\' ng-include=\'\"templates/partials/document.metadata.html\"|prefixTemplate\'></div>\n\n      <!-- this element has fixed height. -->\n      <div ng-if=\'document.type==\"video-cover\"\'>\n        \n        <div class=\'caption reference\' markdown=\'document.metadata.reference.fr\'></div>\n        <div class=\'copyright\'>{{document.copyrights}}</div>\n        \n      </div>\n\n      <div ng-if=\'document.type==\"picture\"\' lazy-image src=\'document.src\'></div>\n\n      <div ng-if=\'document.type==\"pdf\"\' lazy-image src=\'document.snapshot\'></div>\n      \n\n      <blockquote ng-if=\'document.citation\' markdown=\'document.citation\'></blockquote>\n\n\n      \n      <div ng-if=\'!document.metadata\'>\n        <div ng-if=\'document.title\' class=\'title\'>{{document.title}}</div>\n        <div ng-if=\'document.caption\' class=\'caption\'>{{document.caption}}</div>\n        <div ng-if=\'document.copyrights\' class=\'copyright\'>{{document.copyrights}}</div>\n        \n      </div>\n\n      <div ng-if=\'document.type==\"bibtex\"\'>\n        <div class=\'caption\'>\n          <span ng-if=\'document.metadata.author\'>{{document.metadata.author|bibtex}},</span>\n          <span ng-if=\'document.metadata.editor\'>{{document.metadata.editor|bibtex}}</span>(edited by)</span> \n          \n          <em>{{document.metadata.title|bibtex}}</em>\n          <span>{{document.metadata.publisher|bibtex}}</span>\n          <span ng-if=\'document.metadata.year\'>, <span>{{document.metadata.year|bibtex}}</span> \n        </div>\n      </div>\n\n      <div ng-if=\'document.type!=\"bibtex\" && document.metadata.title\'>\n        <div class=\'caption\' markdown=\'document.metadata.title\'></div>\n        <div ng-if=\'document.metadata.reference\' class=\'caption reference\' markdown=\'document.metadata.reference\'></div>\n        <div ng-if=\'document.metadata.copyright\' class=\'copyright\' markdown=\'document.metadata.copyright\'></div>\n        <div ng-if=\'document.metadata.author_name\' class=\'copyright\'>\n          <a ng-href=\'{{document.metadata.author_url}}\' target=\'_blank\' markdown=\'document.metadata.author_name\'></a>\n        </div>\n      </div>\n\n    </div>");
$templateCache.put("/static/templates/partials/document.image.html","<div class=\'image-wrapper\'>\n  <!-- <div ng-if=\'document.metadata.urls\' lazy-image src=\'document.metadata.urls.Preview\' size=\'contain\'></div>\n -->\n  <img lazy-img=\'{{document.metadata.urls.Publishable}}\' />\n</div>");
$templateCache.put("/static/templates/partials/document.metadata.html","<div class=\'metadata\'><div ng-if=\'document.metadata.reference\' embedit=\'document.metadata.reference\' language=\'language\'></div>\n<div ng-if=\'document.metadata.copyright\' embedit=\'document.metadata.copyright\' language=\'language\'></div></div>");
$templateCache.put("/static/templates/partials/document.placeholder.html","<div onload=\'document=resolved\' ng-include=\'\"templates/partials/document.html\"|prefixTemplate\' ></div>");
$templateCache.put("/static/templates/partials/mde.html","<div class=\'mde\'>\n  <div class=\'toolbox\'> \n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"strong\") != -1?\"active\": \"\"}}\' ng-click=\'action(\"toggleBold\")\'>B</button>\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"em\") != -1?\"active\": \"\"}}\' style=\'font-style:italic\' ng-click=\'action(\"toggleItalic\")\'>I</button>\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"header-1\") != -1?\"active\": \"\"}}\' ng-click=\'action(\"toggleHeading1\")\'>H1</button>\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"header-2\") != -1?\"active\": \"\"}}\' ng-click=\'action(\"toggleHeading2\")\'>H2</button>\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"header-3\") != -1?\"active\": \"\"}}\' ng-click=\'action(\"toggleHeading3\")\'>H3</button>\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"quote\") != -1?\"active\": \"\"}}\' ng-click=\'action(\"toggleBlockquote\")\'>Q</button>\n\n      <button style=\'width:70px\' class=\'sans-serif btn {{isPreviewEnabled? \"active\": \"\"}}\' ng-click=\'action(\"togglePreview\")\'>preview</button>\n\n      <button ng-disabled=\'isPreviewEnabled\' class=\'btn {{activeStates.indexOf(\"link\") != -1|| activeStates.indexOf(\"url\") != -1? \"active\": \"\"}}\' ng-click=\'showReferenceModal()\'><span class=\'icon-plus\'></span></button>\n      <!-- {{activeStates}} -->\n  </div>\n  <div class=\'wand\' >\n    <button class=\'btn\' ng-disabled=\'isPreviewEnabled\' ng-click=\'showReferenceModal()\'><span class=\'icon-plus\'></span></button>    \n  </div>\n\n	<textarea class=\'mde-textarea\' placeholder=\"write something...\"></textarea>\n</div>");
$templateCache.put("/static/templates/partials/oembed-search-results.html","<div class=\'doc doc-{{document.type}} {{document.isSelected?\"active\":\"\"}}\' ng-click=\'selectDocument(document)\'>\n\n  <!-- <div class=\'divider\'>&nbsp;</div> -->\n  \n  \n  <div ng-if=\'document.urls.Preview\' lazy-image src=\'document.urls.Preview\'></div>\n\n  <div class=\'title\' embedit=\'document.title\'></div>\n</div>");
$templateCache.put("/static/templates/partials/story.html","<div class=\"story lite\">\n  <!-- <div ng-if=\'!$first\' class=\"divider\"></div> -->\n  <div class=\"tags\" ng-if=\"story.tags.length\">\n      <span class=\'tag\' ng-repeat=\'tag in story.tags|filter:\"public\"\' ng-include=\'\"templates/partials/tag.html\"|prefixTemplate\'></span>\n  </div>\n  <div class=\"date\">{{story.date_created|date:\'mediumDate\'}}</div>\n\n  <div  class=\"divider\"></div>\n\n  <h3 class=\"title\"><a ui-sref=\"story({postId: story.id})\">{{story.title}} {{story.status != \'public\'? \'(DRAFT)\': \'\'}}</a></h3>  \n  \n  <blockquote class=\"reduced\">{{story.excerpt}}.\n    <a href ui-sref=\"story({postId: story.id})\">\n      <span class=\'icon-arrow-right-circle\'></span>\n    </a>\n    <p>\n      <em ng-if=\"story.difference\">{{story.difference}}</em>\n    </p>\n  </blockquote>\n  <p>\n    \n    <span class=\'creator\' ng-if=\"!story.authors.length\">\n      created by <span ng-init=\'author=story.owner;$last=true\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n    </span>\n    <span class=\'authors\' ng-if=\"story.authors.length\">\n      written by <span ng-repeat=\'author in story.authors\' ng-include=\'\"templates/partials/author.html\"|prefixTemplate\'></span>\n    </span>\n  </p>\n</div>");
$templateCache.put("/static/templates/partials/table-of-contents.html","\n<div id=\'inner-table-of-contents-toggler\' >\n  <button class=\'btn-transparent\' ng-click=\'toggleTableOfContents()\'><span class=\'icon-action-undo\'></span></button>\n  <div class=\'save\' ng-if=\'state == \"writing\" || state == \"draft\"\' ng-click=\'save()\'>\n    <button class=\'btn-transparent btn-line\'><span  class=\'icon-disc\'></span></button>\n    <div class=\'sans-serif\' style=\'text-transform: uppercase; font-size:10px; text-align:center; line-height:20px\' translate=\'save\'></div>\n  </div>\n  <!-- <div class=\'edit\' ng-if=\'state == \"post\"\' ng-click=\'save()\'>\n    <button class=\'btn-transparent btn-line\'><span  class=\'icon-disc\'></span></button>\n    <div class=\'sans-serif\' style=\'text-transform: uppercase; font-size:10px; text-align:center; line-height:20px\' translate=\'save\'></div>\n  </div> -->\n</div>\n\n<h2>table of contents</h2>\n\n\n<ul>\n  <li ng-repeat=\"heading in ToC\" class=\'heading heading-{{heading.level}}\'>\n  <a ng-click=\'setHash(heading.slug)\'> {{heading.text}}</a></li>\n\n</ul>");
$templateCache.put("/static/templates/partials/table-of-documents.html","<!-- <h2>table of documents</h2>\n -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <ul>\n        <li ng-repeat=\"document in documents\">\n          <div class=\'doc doc-{{document.type}}\'>\n            <div class=\'divider\'>&nbsp;</div>\n            <!-- <div class=\"citation caption\" ng-if=\'document.citation\'>{{document.citation}}</div> -->\n            <!-- this element has fixed height. -->\n\n            <div ng-if=\'document.type==\"video-cover\"\'>\n              \n              \n            </div>\n\n            <div ng-if=\'document.type==\"picture\"\'>\n              \n              <div lazy-image src=\'document.src\'></div>\n              \n            </div>\n\n            <div ng-if=\'document.type==\"image\"\'>\n              <div lazy-image ng-click=\'fullsize(document)\' src=\'document.metadata.urls.Preview\'></div>\n            </div>\n\n            <div ng-if=\'document.type==\"video\"\'>\n              <div ng-if=\"document.metadata.thumbnail_url\" ng-click=\'fullsize(document)\' lazy-image src=\'document.metadata.thumbnail_url\'></div>\n              <div ng-if=\"!document.metadata.thumbnail_url && document.metadata.urls.Preview\" lazy-image src=\'document.metadata.urls.Preview\'></div>\n            </div>\n\n            <div ng-if=\'document.type==\"link\"\' class=\"caption\">\n              <a ng-href=\'{{document.metadata.url}}\' target=\'_blank\'>cfr. {{document.metadata.url}}</a>\n              <!-- {{document.metadata}} -->\n              <!-- <div lazy-image src=\'document.metadata.thumbnail_url\'></div> -->\n            </div>\n\n            <div ng-if=\'document.type==\"text\"\'>\n              <div lazy-image ng-click=\'fullsize(document)\' src=\'document.metadata.urls.Preview\'></div>\n            </div>\n\n            <div ng-if=\'document.type==\"pdf\"\'>\n              <div lazy-image src=\'{{document.snapshot}}\'></div>\n            </div>\n\n            <div ng-if=\'document.type==\"rich\"\' marked=\"document.metadata.html\">\n            </div>\n\n            <div ng-if=\'!document.metadata.title\'>\n              <blockquote>{{document.citation}}</blockquote>\n              <div class=\'caption\'>{{document.caption}}</div>\n              <div class=\'copyright\'>{{document.copyrights}}</div>\n              \n            </div>\n\n            <div ng-if=\'document.type==\"bibtex\"\'>\n              <div class=\'caption\'>\n                <span ng-if=\'document.metadata.author\'>{{document.metadata.author|bibtex}}</span>\n                <span ng-if=\'document.metadata.editor\'>{{document.metadata.editor|bibtex}}\'> (edited by) </span>\n                \n                <em>{{document.metadata.title|bibtex}}</em>\n                <span>{{document.metadata.publisher|bibtex}}</span>\n                <span ng-if=\'document.metadata.year\'>, <span>{{document.metadata.year|bibtex}}</span> </span>\n              </div>\n            </div>\n\n            <div ng-if=\'document.type!=\"bibtex\" && document.metadata.title\'>\n              <div class=\'caption\' markdown=\'document.metadata.title\'></div>\n              <div ng-if=\'document.metadata.reference\' class=\'caption reference\' markdown=\'document.metadata.reference\'></div>\n              <div ng-if=\'document.metadata.copyright\' class=\'copyright\' markdown=\'document.metadata.copyright\'></div>\n              <div ng-if=\'document.metadata.author_name\' class=\'copyright\'>\n                <a ng-href=\'{{document.metadata.author_url}}\' target=\'_blank\' markdown=\'document.metadata.author_name\'></a>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>");
$templateCache.put("/static/templates/partials/tag.html","<span class=\'tag\' ng-class=\'tag.category\'>{{tag.name}}</span>{{$last?\' \': \', \'}}");
$templateCache.put("/static/templates/partials/tag.input.html","<span ng-class=\'data.category\'>\n  <span class=\'type\'>{{data.category}}/</span>\n  <span>{{data.name}}</span>\n	<a class=\"remove-button\" ng-click=\"$removeTag()\" ><span class=\'icon-close\'></span></a>\n</span>");
$templateCache.put("/static/templates/partials/term.html","<div ng-class=\'{\"active\": term.isSelected}\' class=\'doc term\' ng-click=\'selectDocument(term)\'>\n  <div class=\'divider\'>&nbsp;</div>\n  <!-- this element has fixed height. -->\n  \n  <div class=\'caption title\' markdown=\'term.title\'></div>\n  <div class=\'caption reference\' markdown=\'term.abstract\'></div>\n  <div class=\'copyright\' markdown=\'document.copyright\'></div>\n\n</div>");
$templateCache.put("/static/templates/partials/modals/fullsize.html","<div ng-class=\'fullsized.type\' class=\"modal fullsize\"  tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"z-index: 1050; display: block;\">\n  <div ng-click=\'$hide()\' class=\'close\'>\n  <span class=\'icon-close\'></span>\n  </div>\n  <div ng-class=\'fullsized.type\' class=\'oversize\' style=\'\'>\n    <div class=\'heading\'>\n      <h2 embedit=\'fullsized.metadata.title\'></h2>\n      <div class=\'contents\'>\n        <span embedit=\'fullsized.metadata.reference\'></span>\n        <span ng-if=\'fullsized.metadata.author_name\'>by {{fullsized.metadata.author_name}}</span>\n        <a ng-if=\'fullsized.url\' target=\'_blank\' ng-href=\'{{fullsized.url}}\' translate=\'link.to.original\'></a>\n      </div>\n    </div>\n\n    <div class=\'wrapper\' ng-if=\'fullsized.type == \"link\"\'>\n      \n    </div>\n    <div class=\'wrapper\' ng-if=\'fullsized.type == \"rich\"\'>\n    \n      \n\n       <div class=\'embedded\' ng-if=\'fullsized.metadata.html\' stretch=\'true\' embedit=\'fullsized.metadata.html\'></div>\n    </div>\n\n    <div class=\'wrapper\' ng-if=\'fullsized.type == \"image\"\'>\n\n      <div lazy-image size=\'contain\' src=\'fullsized.metadata.urls.Publishable\'></div>\n\n      <div class=\'heading\'>\n        <h2 marked=\'fullsized.metadata.title\'></h2>\n        <div marked=\'fullsized.metadata.reference\'></div>\n        \n      </div>\n      <div class=\'inner\'>\n        <div class=\'text caption\' marked=\'fullsized.metadata.caption\'></div>\n        <div class=\'text copyright\' marked=\'fullsized.metadata.copyright\'></div>\n      </div>\n    </div>\n\n    <div class=\'wrapper\' ng-if=\'fullsized.type == \"video\"\'>\n      <!-- <div class=\'heading\'>\n        <h2 marked=\'fullsized.metadata.title\'></h2>\n        <div ng-if=\'fullsized.metadata.reference\' marked=\'fullsized.metadata.reference\'></div>\n        \n      </div> -->\n\n   \n      <div class=\'embedded\' stretch=\'true\' ng-if=\'fullsized.metadata.html\' embedit=\'fullsized.metadata.html\'></div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/static/templates/partials/modals/mde-enrich.html","<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"z-index: 1050; display: block;\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" ng-show=\"title\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" ng-click=\"$hide()\">\n      <span aria-hidden=\"true\" class=\'icon-close\'></span>\n      </button>\n      <h4 class=\"modal-title\">add resource</h4></div>\n      \n      <div class=\"modal-body\">\n\n        \n        <!-- <input type=\'text\' class=\"form-control\" placeholder=\"search ...\"> -->\n        <ul class=\"nav nav-tabs\" style=\'padding-left:15px; margin-bottom:0\' role=\"tablist\">\n          <li role=\"presentation\" ng-class=\"tab == \'favourite\'? \'active\':\'\'\"><a ng-click=\'setTab(\"favourite\")\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" translate=\'enrich.resources\'></a></li>\n          <li role=\"presentation\" ng-class=\'{\"active\": tab == \"glossary\"}\'><a ng-click=\'setTab(\"glossary\")\' aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\" translate=\'enrich.glossary\'></a></li>\n          <li role=\"presentation\" ng-class=\"tab == \'CVCE\'? \'active\':\'\'\"><a ng-click=\'setTab(\"CVCE\")\' aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">cvce archives</a></li>\n          \n          <li role=\"presentation\" ng-class=\"tab == \'url\'? \'active\':\'\'\"><a ng-click=\'setTab(\"url\")\' aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\" translate=\'enrich.fromUrl\'></a></li>\n\n          <!-- <li role=\"presentation\" ng-class=\"tab == \'bibtex\'? \'active\':\'\'\"><a ng-click=\'setTab(\"bibtex\")\' aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">new reference</a></li> -->\n          \n        </ul>\n\n        \n          <div ng-show=\"tab == \'favourite\'\" class=\"tab-content\">\n            <div class=\'section\' ng-class=\'{\"last\": !lookups.length}\'>\n              <label>\n                <span translate=\'search\'></span>\n                <span style=\'color: #b7b7b7\' translate=\'{{suggestMessage}}\'></span>\n              </label>\n              <input placeholder=\'...\' class=\'form-control\' type=\'text\' ng-model=\'query\' ng-model-options=\"{ debounce: 250 }\" ng-change=\'suggest(query, tab)\'>\n            </div>\n            <div class=\'section last\'>\n              <ul ><li ng-repeat=\'document in lookups\' ng-include=\'\"templates/partials/document.html\"|prefixTemplate\'></li>\n              </ul>\n            </div>\n          </div>\n\n          <div ng-show=\"tab == \'glossary\'\" class=\"tab-content\">\n            <div class=\'section\' ng-class=\'{\"last\": !glossary.length}\'>\n              <label>\n                <span translate=\'search\'></span>\n                <span style=\'color: #b7b7b7\' translate=\'{{suggestMessage}}\'></span>\n              </label>\n              <input placeholder=\'...\' class=\'form-control\' type=\'text\' ng-model=\'query\' ng-model-options=\"{ debounce: 250 }\" ng-change=\'suggest(query, tab)\'>\n            </div>\n            <div class=\'section last\'>\n              <ul ><li ng-repeat=\'term in glossary\' ng-include=\'\"templates/partials/term.html\"|prefixTemplate\'></li>\n              </ul>\n            </div>\n          </div>\n\n          <div ng-show=\"tab == \'CVCE\'\" class=\"tab-content\">\n            <div class=\'section padded\' ng-class=\'{\"last\": !suggestResults.length}\'>\n              <label>\n                <span translate=\'search\'></span>\n                <span style=\'color: #b7b7b7\' translate=\'{{suggestMessage}}\'></span>\n              </label>\n              <input placeholder=\'...\' class=\'form-control\' type=\'text\' ng-model=\'query\' ng-model-options=\"{ debounce: 250 }\" ng-change=\'suggest(query, tab)\'>\n            </div>\n            <div class=\'section last\'>\n              <ul class=\'list-of-documents\'>\n                <li ng-repeat=\'document in suggestResults\' ng-include=\'\"templates/partials/oembed-search-results.html\"|prefixTemplate\'>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div ng-show=\"tab == \'url\'\" class=\"tab-content\">\n            <div class=\'section\'>\n              <label translate=\'url\'></label>\n              <span style=\'color: #b7b7b7\' translate=\'{{suggestMessage}}\'></span>\n              <div class=\'elastic-textarea-wrapper\'>\n                <textarea class=\"elastic-textarea\" rows=\"3\" msd-elastic ng-model=\'url\' ng-change=\'previewUrl(url)\' type=\'text\' placeholder=\'http://\'></textarea>\n              </div>\n            \n              <div class=\'preview\' ng-class=\'embed.type\'>\n                <div ng-if=\'embed.provider_name==\"CVCE\"\' ng-include=\'\"templates/partials/embeds/cvce.html\"|prefixTemplate\'></div>\n                <div ng-if=\'embed.provider_name==\"YouTube\"\' ng-include=\'\"templates/partials/embeds/YouTube.html\"|prefixTemplate\'></div>\n                <div ng-if=\'embed.type == \"link\"\'>\n                  <a href=\'embed.url\'>{{embed.title}}</a>\n                  <div markdown=\'embed.description\'></div>\n                </div>\n                <div ng-if=\'embed.type == \"rich\"\'>\n                  <a ng-href=\'embed.url\' target=\'_blank\'>url</a>\n                  <div ng-if=\'embed.html\' markdown=\'embed.html\'></div>\n                  <div ng-if=\'!embed.title\' translate=\'enrich.type.notsupported\'></div>\n                  <div>\n                    <label translate=\'title\'></label>\n                    <input class=\'form-control\' ng-model=\'embed.title\'></input>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\'section last\'>\n              <label translate=\'bibtex reference\'></label>\n              <div class=\'elastic-textarea-wrapper\'>\n                <textarea class=\"elastic-textarea\" rows=\"3\" msd-elastic ng-model=\'reference\' type=\'text\' placeholder=\'@{}\'></textarea>\n              </div>\n              <div class=\'sans-serif description\'>You can use <a href=\'http://truben.no/latex/bibtex/\'>this web app</a> to easily build a bibtex reference</div>\n              \n            </div>\n          </div>\n\n          <div ng-show=\"tab == \'bibtex\'\" class=\"tab-content\">\n            Add a reference (bibtex) Cfr <a href=\'https://www.zotero.org/support/creating_bibliographies\'>quick copy from Zotero</a>\n            <label translate=\'bibtex\'></label>\n            <div class=\'elastic-textarea-wrapper\'>\n              <textarea class=\"elastic-textarea\" style=\"font-family: monospace;\" rows=\"8\" msd-elastic ng-model=\'reference\' type=\'text\' placeholder=\'@BOOK {}\'></textarea>\n            </div>\n          </div>\n          <div style=\'clear:both\'></div>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <span class=\'btn-line-group\'><button type=\"button\" class=\"btn-line {{isSomethingSelected?\'active\':\'\'}}\" ng-click=\"addDocument(tab, contents, reference, url, embed)\" translate=\'button.add\'></button>\n        </span>\n        <span class=\'btn-line-group\'>\n        <button type=\"button\" class=\"btn-line\" ng-click=\"$hide()\">Close</button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/static/templates/partials/embeds/YouTube.html","\n<div class=\'caption title\' markdown=\'embed.title\'></div>\n<div class=\'copyright\'><a ng-href=\'embed.author_url\'>{{embed.author_name}}</a></div>\n\n\n<div lazy-image src=\'embed.thumbnail_url\'></div>\n\n");
$templateCache.put("/static/templates/partials/embeds/cvce.html","\n<div class=\'caption title\' markdown=\'embed.title.fr\'></div>\n<div class=\'caption reference\' markdown=\'embed.reference.fr\'></div>\n<div class=\'copyright\'>{{embed.copyrights}}</div>\n\n\n <div ng-if=\'embed.urls.Preview\'>\n  <div lazy-image src=\'embed.urls.Preview\'></div>\n </div>\n\n");}]);