const webpack = require('webpack');
const path = require('path');
// const autoprefixer = require('autoprefixer');
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
      },
      extensions: ['*', '.js', '.vue', '.json'],
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader'],
      }, {
        test: /\.styl|css$/,
        use: [
          'vue-style-loader',
          'css-loader',
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
        'process.env.ENV':
          JSON.stringify(process.env.RUN_ENV || 'development'),
      }),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
      sourceMapFilename: 'bundle.[hash].js.map',
    },
  };

  switch (env.BUILD_ENV) {
    case 'development':
      config = {
        ...config,
        devtool: 'source-map',
        mode: 'development',
        devServer: {
          contentBase: './dist',
          port: 9200,
          host: 'vue-todolist.local',
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
              sourceMap: true,
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
