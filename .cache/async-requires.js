// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/home/bryan/a-nerds-word/src/templates/blog-post.js"),
  "component---src-templates-tags-js": require("gatsby-module-loader?name=component---src-templates-tags-js!/home/bryan/a-nerds-word/src/templates/tags.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/bryan/a-nerds-word/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/bryan/a-nerds-word/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/bryan/a-nerds-word/src/pages/index.js"),
  "component---src-pages-search-js": require("gatsby-module-loader?name=component---src-pages-search-js!/home/bryan/a-nerds-word/src/pages/search.js"),
  "component---src-pages-tags-js": require("gatsby-module-loader?name=component---src-pages-tags-js!/home/bryan/a-nerds-word/src/pages/tags.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/bryan/a-nerds-word/.cache/json/layout-index.json"),
  "edgar.json": require("gatsby-module-loader?name=path---edgar!/home/bryan/a-nerds-word/.cache/json/edgar.json"),
  "dresden-files.json": require("gatsby-module-loader?name=path---dresden-files!/home/bryan/a-nerds-word/.cache/json/dresden-files.json"),
  "reanimator.json": require("gatsby-module-loader?name=path---reanimator!/home/bryan/a-nerds-word/.cache/json/reanimator.json"),
  "badlands.json": require("gatsby-module-loader?name=path---badlands!/home/bryan/a-nerds-word/.cache/json/badlands.json"),
  "broken-earth.json": require("gatsby-module-loader?name=path---broken-earth!/home/bryan/a-nerds-word/.cache/json/broken-earth.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/home/bryan/a-nerds-word/.cache/json/hello-world.json"),
  "tags-magic-the-gathering.json": require("gatsby-module-loader?name=path---tags-magic-the-gathering!/home/bryan/a-nerds-word/.cache/json/tags-magic-the-gathering.json"),
  "tags-deck-review.json": require("gatsby-module-loader?name=path---tags-deck-review!/home/bryan/a-nerds-word/.cache/json/tags-deck-review.json"),
  "tags-personal.json": require("gatsby-module-loader?name=path---tags-personal!/home/bryan/a-nerds-word/.cache/json/tags-personal.json"),
  "tags-book-review.json": require("gatsby-module-loader?name=path---tags-book-review!/home/bryan/a-nerds-word/.cache/json/tags-book-review.json"),
  "tags-fantasy.json": require("gatsby-module-loader?name=path---tags-fantasy!/home/bryan/a-nerds-word/.cache/json/tags-fantasy.json"),
  "tags-format-review.json": require("gatsby-module-loader?name=path---tags-format-review!/home/bryan/a-nerds-word/.cache/json/tags-format-review.json"),
  "tags-life.json": require("gatsby-module-loader?name=path---tags-life!/home/bryan/a-nerds-word/.cache/json/tags-life.json"),
  "tags-card-review.json": require("gatsby-module-loader?name=path---tags-card-review!/home/bryan/a-nerds-word/.cache/json/tags-card-review.json"),
  "tags-worldbuilding.json": require("gatsby-module-loader?name=path---tags-worldbuilding!/home/bryan/a-nerds-word/.cache/json/tags-worldbuilding.json"),
  "tags-intro.json": require("gatsby-module-loader?name=path---tags-intro!/home/bryan/a-nerds-word/.cache/json/tags-intro.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/bryan/a-nerds-word/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/bryan/a-nerds-word/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/bryan/a-nerds-word/.cache/json/index.json"),
  "search.json": require("gatsby-module-loader?name=path---search!/home/bryan/a-nerds-word/.cache/json/search.json"),
  "tags.json": require("gatsby-module-loader?name=path---tags!/home/bryan/a-nerds-word/.cache/json/tags.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/bryan/a-nerds-word/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/bryan/a-nerds-word/.cache/layouts/index.js")
}