module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-font-magician')({
      display: 'swap'
    }),
    require('autoprefixer')
  ]
}
