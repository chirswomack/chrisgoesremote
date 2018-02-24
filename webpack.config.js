import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import { phenomicLoader } from "phenomic"
import PhenomicLoaderFeedWebpackPlugin
  from "phenomic/lib/loader-feed-webpack-plugin"
import PhenomicLoaderSitemapWebpackPlugin
  from "phenomic/lib/loader-sitemap-webpack-plugin"

import pkg from "./package.json"

export default (config = {}) => {

  // hot loading for postcss config
  // until this is officially supported
  // https://github.com/postcss/postcss-loader/issues/66
  const postcssPluginFile = require.resolve("./postcss.config.js")
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile)
    delete require.cache[postcssPluginFile]
    return require(postcssPluginFile)(config)
  }

  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
          },
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src"),
          ],
          loaders: [
            "babel-loader?cacheDirectory",
            "eslint-loader" + (config.dev ? "?emitWarning" : ""),
          ],
        },

        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              { loader: 'postcss-loader', query: { 'plugins': postcssPlugins } }
            ]
          }),
        },
        
        // ! \\ if you want to use Sass or LESS, you can add sass-loader or
        // less-loader after postcss-loader (or replacing it).
        // ! \\ You will also need to adjust the file extension
        // and to run the following command
        //
        // Sass: `npm install --save-dev node-sass sass-loader`
        // https://github.com/jtangelder/sass-loader
        //
        // LESS: npm install --save-dev less less-loader
        // https://github.com/webpack/less-loader

        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
          loader: "file-loader",
          query: {
            name: "[path][name].[hash].[ext]",
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: "raw-loader",

        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([
        {from: 'admin', to: 'admin'},
      ]),
      // You should be able to remove the block below when the following
      // issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in query, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname,
        },
      }),

      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage,
      }),

      new ExtractTextPlugin({
        filename: "style.css",
        disable: config.dev,
      }),

      ...config.production && [
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    resolve: { extensions: [ ".js", ".json" ] },
  }
}
