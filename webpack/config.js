const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const INDEX_HTML_TEMPLATE = "./src/index.html";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /((?!spec).)*\.(ts|tsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true,
              },
            ],
          ],
          plugins: [["babel-plugin-styled-components", { fileName: false }]],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "RButcher Engineering",
      template: path.resolve(INDEX_HTML_TEMPLATE),
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "sourcemaps/[file].map",
    }),
  ],
};
