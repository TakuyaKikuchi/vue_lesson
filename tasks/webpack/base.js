import path from 'path';

export const src = path.resolve(__dirname, '../../_dev');
export const dist = path.resolve(__dirname, '../../_pre');

export default {
  entry: {
    "assets/scripts/app": `${src}/assets/scripts/app.js`
  },
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     failOnError: false
      //   }
      // },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
