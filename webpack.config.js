const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[name].[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/pages/index.html',
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/sign-up.html',
      filename: './sign-up.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/log-in.html',
      filename: './log-in.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/account.html',
      filename: './account.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/about.html',
      filename: './about.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/contact.html',
      filename: './contact.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/cart.html',
      filename: './cart.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/wishlist.html',
      filename: './wishlist.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
