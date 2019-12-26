const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"], //@babel/polyfill es6api兼容
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: './'
  },
  externals: {
    jquery: 'jQuery' //第三方包 不打包进main的js中 减少文件体积
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,// 开启打包编译缓存 提高利率
            presets: ['@babel/preset-env'],// 转es5
            plugins: ["@babel/plugin-transform-runtime"] //去除重复辅助的方法
          }
        }
      }
    ]
  }
}