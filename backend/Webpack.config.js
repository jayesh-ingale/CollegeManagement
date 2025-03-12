const path = require('path');

module.exports = {
  entry: './server.js',  // Entry point of your backend
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Use the preset to compile ES6
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
    },
  },
};
