const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './client/js/App.jsx',
  node: {
    net: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      // { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      //   loader: 'file-loader?name=fonts/[name].[ext]'
      // }
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
      }
    ]
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: 'js/bundle.min.js',
    publicPath: '/dist/'
  },
  resolve: {
    modules: ['node_modules', 'client/js'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Hammer: 'hammerjs/hammer'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new ExtractTextPlugin({ filename: 'css/style.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true })
  ],
};
