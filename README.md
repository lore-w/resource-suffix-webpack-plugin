### resource-suffix-webpack-plugin


Resource-suffix-webpack-plugin 是一个webpack插件，可以为Static Resource添加自定义的版本号

虽然webpack提供了以hash命名文件的方式来管理版本问题，但是在一些特殊场景下（比如发布系统有自己的版本号管理方案），我们仍然有需要自定义版本号的需求。

#### Install

`$ npm install html-webpack-plugin resource-suffix-webpack-plugin --save-dev`

#### Usage

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ResourceSuffixWebpackPlugin = require('resource-suffix-webpack-plugin')

module.exports = {
  ...

  plugins: [
    new HtmlWebpackPlugin({
      filename: index.html,
      template: 'index.html',
      inject: true
    }),
    new ResourceSuffixWebpackPlugin({
      suffix: '${v}'
    })
  ]
}
```
构建完成，输出的html如下：

```html
...
<script type="text/javascript" src="xxx/js/vendor.js${v}"></script>
...
```
