module.exports = (config) => [
  require('tailwindcss')('./tailwind.js'),
  // require("stylelint")(),
  require("postcss-cssnext")({ browsers: "last 2 versions" }),
  // require("postcss-reporter")(),
  ...!config.production ? [
    require("postcss-browser-reporter")(),
  ] : []
]
