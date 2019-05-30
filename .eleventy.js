module.exports = function(config) {
  config.addPassthroughCopy("static");

  return {
    passthroughFileCopy: true,
  }
}
