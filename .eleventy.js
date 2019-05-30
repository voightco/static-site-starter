module.exports = function(config) {
  config.addPassthroughCopy("static");
  config.addPassthroughCopy("css/style.css");

  return {
    passthroughFileCopy: true,
  }
}
