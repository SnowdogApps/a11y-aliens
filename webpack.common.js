
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace : true,
  collapseWhitespace : true,
  includeAutoGeneratedTags : false,
  minifyCSS : true,
  minifyJS : true,
  minifyURLs : true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes : true,
  removeEmptyElements: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace :true
}
// html files
const mainPage = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  minify: minify,
  favicon: 'src/favicon.ico'
});
const aboutPage = new HtmlWebpackPlugin({
  template: 'src/about.html',
  filename: 'about.html',
  minify: minify,
  favicon: 'src/favicon.ico'
});
const contactPage = new HtmlWebpackPlugin({
  template: 'src/contact.html',
  filename: 'contact.html',
  minify: minify,
  favicon: 'src/favicon.ico'
});
const clean = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            outputPath: './'
          }
        }]
      }
    ]
  },
  plugins: [
    clean,
    mainPage,
    aboutPage,
    contactPage
  ]
};
