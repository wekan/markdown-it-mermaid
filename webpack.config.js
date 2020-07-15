const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  mode:"production",
  target: "node",
  entry: {
    index: "./src/index.js",
  },
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { node: "current" }, // 노드일 경우만
                modules: "auto",
              },
            ],
          ],
        },
        exclude: ["/node_modules"],
      },
    ],
  },
  devtool: "source-map",
};

module.exports = config;
