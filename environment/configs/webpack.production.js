const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base')

const config = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'less-loader',
          ],
        }),
      },
    ],
  }
})

config.plugins.push(new ExtractTextPlugin('[name].css'))

module.exports = config
