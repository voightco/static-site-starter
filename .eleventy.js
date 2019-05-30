module.exports = function(config) {
  config.addPassthroughCopy("static/img");
  config.addPassthroughCopy("css/style.css");

  return {
    passthroughFileCopy: true,
  }
}
