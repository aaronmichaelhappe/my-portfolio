const fs = require('fs');
const pluginSvgSprite = require('eleventy-plugin-svg-sprite');

// Shortcodes
// shortcodes (may) not playing nicely with apline. not worth the fuss right now. implement later if app gets more complex
// const shortcodes = require('./utils/shortcodes.js');

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  config.addPlugin(pluginSvgSprite, {
    path: './src/assets/icons',
    svgSpriteShortcode: 'iconsprite',
  });

  // Object.keys(shortcodes).forEach((shortcodeName) => {
  //   config.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  // });

  config.addWatchTarget('./src/assets');

  // Static assets to pass through
  config.addPassthroughCopy('./src/assets/images');
  config.addPassthroughCopy('./src/public');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/main.js');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
