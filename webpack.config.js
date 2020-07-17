const path = require("path");

module.exports = {
  target: "web",
  mode: "production",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    library: "MyLibrary",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
