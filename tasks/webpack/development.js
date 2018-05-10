import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import base from './base';

/**
 *  開発時のwebpackの設定
 *  baseの設定を拡張
 */

const devConfig = Object.assign({}, base, {
  // custom configs on development
  cache: true,
  devtool: 'inline-source-map',
  stats: {
    colors: true, // with console colors
    reasons: true, // add information about the reasons why modules are included
    timings: true, // add timing information
    hash: true, // add the hash of the compilation
    version: true, // add webpack version information
    chunks: true, // add chunk information
    chunkModules: true, // add built modules information to chunk information
    cached: true // add also information about cached (not built) modules
  },
  plugins: [
    // フロントのJSコードの中で環境変数としてNODE_ENVにdevelopを渡す
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // webpackの通知を表示させる
    new WebpackNotifierPlugin()
  ]
});
export default devConfig;
