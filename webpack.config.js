const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const liveReloadPlugin = require('webpack-livereload-plugin');

const devMode = process.env.NODE_ENV;

// console.log({devMode});
// 'production'
module.exports = {
  mode: devMode,
  entry: './frontend/src/index.js',
  output: {
    path: path.join(__dirname, './backend/public'),
    filename: 'js/bundle.js',
  },
  devServer: {
    port: '4000',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node_modules$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
          // 'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      template: './frontend/public/index.html',
    }),
    // eslint-disable-next-line new-cap
    new miniCssExtractPlugin({
      filename: 'css/bundle.css',
      chunkFilename: '[id].css',
      // ignoreOrder: false,
    }),
    // eslint-disable-next-line new-cap
    new liveReloadPlugin(),

  ],
  devtool: 'source-map',
};

/*
,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
*/
