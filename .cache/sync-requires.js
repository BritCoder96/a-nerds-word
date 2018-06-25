// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/bryan/a-nerds-word/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/bryan/a-nerds-word/src/templates/blog-post.js")),
  "component---src-templates-tags-js": preferDefault(require("/home/bryan/a-nerds-word/src/templates/tags.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/bryan/a-nerds-word/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/bryan/a-nerds-word/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/bryan/a-nerds-word/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/home/bryan/a-nerds-word/src/pages/search.js")),
  "component---src-pages-tags-js": preferDefault(require("/home/bryan/a-nerds-word/src/pages/tags.js"))
}

exports.json = {
  "layout-index.json": require("/home/bryan/a-nerds-word/.cache/json/layout-index.json"),
  "badlands.json": require("/home/bryan/a-nerds-word/.cache/json/badlands.json"),
  "broken-earth.json": require("/home/bryan/a-nerds-word/.cache/json/broken-earth.json"),
  "hello-world.json": require("/home/bryan/a-nerds-word/.cache/json/hello-world.json"),
  "tags-magic-the-gathering.json": require("/home/bryan/a-nerds-word/.cache/json/tags-magic-the-gathering.json"),
  "tags-card-review.json": require("/home/bryan/a-nerds-word/.cache/json/tags-card-review.json"),
  "tags-life.json": require("/home/bryan/a-nerds-word/.cache/json/tags-life.json"),
  "tags-personal.json": require("/home/bryan/a-nerds-word/.cache/json/tags-personal.json"),
  "tags-book-review.json": require("/home/bryan/a-nerds-word/.cache/json/tags-book-review.json"),
  "tags-fantasy.json": require("/home/bryan/a-nerds-word/.cache/json/tags-fantasy.json"),
  "tags-worldbuilding.json": require("/home/bryan/a-nerds-word/.cache/json/tags-worldbuilding.json"),
  "tags-intro.json": require("/home/bryan/a-nerds-word/.cache/json/tags-intro.json"),
  "dev-404-page.json": require("/home/bryan/a-nerds-word/.cache/json/dev-404-page.json"),
  "404.json": require("/home/bryan/a-nerds-word/.cache/json/404.json"),
  "index.json": require("/home/bryan/a-nerds-word/.cache/json/index.json"),
  "search.json": require("/home/bryan/a-nerds-word/.cache/json/search.json"),
  "tags.json": require("/home/bryan/a-nerds-word/.cache/json/tags.json"),
  "404-html.json": require("/home/bryan/a-nerds-word/.cache/json/404-html.json")
}