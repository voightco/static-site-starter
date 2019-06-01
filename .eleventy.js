const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("css/style.css");
  config.addPlugin(pluginRss);

  return {
    passthroughFileCopy: true,
  }
}
