const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const INDEX_HTML_TEMPLATE = "./src/index.html";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      title: "RButcher Engineering",
      template: path.resolve(INDEX_HTML_TEMPLATE),
    }),
  ],
};
