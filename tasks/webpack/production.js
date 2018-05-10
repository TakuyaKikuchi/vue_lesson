import webpack from 'webpack';
import base from './base';
/**
 *  リリース時のwebpackの設定
 *  baseの設定を拡張している
 */
const prdConfig = Object.assign({}, base, {
  // custom configs on production
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(), // よく使われるモジュールにふるIDの桁数をより短くすることでよりコードを圧縮する
    // new webpack.optimize.DedupePlugin(),   // 被ってるモジュールがいたらひとつにまとめる。 => Webpack2ではデフォルトでされるようになった
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        screw_ie8: true,
        warnings: true
      }
    }), // compile時にuglifyでminimizeする
    new webpack.optimize.AggressiveMergingPlugin() // ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
  ]
});
export default prdConfig;
