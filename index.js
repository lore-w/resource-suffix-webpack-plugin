const _ = require('lodash')


function ResourceSuffixWebpackPlugin(options) {

  this.suffix = options.suffix || '';
}
ResourceSuffixWebpackPlugin.prototype.apply = function(compiler) {

  let _this = this;
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {

      const assetJs = htmlPluginData.assets.js,
        assetsCss = htmlPluginData.assets.css;

      htmlPluginData.assets.js = _.map(assetJs, (value, index) => {

        return value + _this.suffix;
      });

      htmlPluginData.assets.css = _.map(assetsCss, (value, index) => {

        return value + _this.suffix;
      });

      callback(null, htmlPluginData);
    });
  });
};
module.exports = ResourceSuffixWebpackPlugin;