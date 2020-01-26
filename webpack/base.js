const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const pkg = require("../package.json")

const publicPath = path.resolve(__dirname, "../public")
const buildPath = path.resolve(__dirname, "../build")

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: publicPath,
    port: 3000,
  },
  entry: `./${pkg.main}`,
  output: {
    filename: "bundle.js",
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: [/\.ts(x?)?$/],
        exclude: /node_modules/,
        loader: "babel-loader!ts-loader",
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: `${publicPath}/index.html`,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
}
