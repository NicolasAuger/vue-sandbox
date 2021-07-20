const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
  let config = {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'asn1.js': require.resolve('asn1.js/'),
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify/'),
        stream: require.resolve('stream-browserify/'),
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'stylus-loader',
          }
        }
      }, {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader'],
      }, {
        test: /\.(styl|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       sourceMap: true,
          //       plugins: [autoprefixer],
          //     },
          //   },
          // },
          'stylus-loader',
        ],
      }, {
        test: /\.html$/,
        use: ['html-loader'],
      }, {
        test: /\.(gif|svg|jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        }],
      }],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          caseSensitive: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          minifyJS: true,
        },
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.browser': JSON.stringify(process.browser),
        'process.version': JSON.stringify(process.version),
        'process.env.ENV':
          JSON.stringify(process.env.RUN_ENV || 'development'),
      }),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[fullhash].js',
      sourceMapFilename: 'bundle.[fullhash].js.map',
      publicPath: '/',
    },
  };

  switch (process.env.NODE_ENV) {
    case 'development':
      config = {
        ...config,
        devtool: 'inline-source-map',
        mode: 'development',
        devServer: {
          contentBase: './dist',
          port: 9200,
          host: 'vue-sandbox.poool.develop',
          open: true,
          hot: true,
          quiet: true,
          historyApiFallback: true,
        },
        plugins: [
          ...config.plugins,
          new webpack.LoaderOptionsPlugin({
            debug: true,
          }),
        ],
      };
      break;

    default:
      config = {
        ...config,
        mode: 'production',
        optimization: {
          minimizer: [
            new TerserPlugin({
              parallel: true,
              terserOptions: {
                output: {
                  comments: false,
                },
              },
            }),
          ],
        },
        parallelism: 4,
      };
  }

  return config;
};
