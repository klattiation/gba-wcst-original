const merge = require("webpack-merge")
const path = require("path")
const base = require("./base")
const TerserPlugin = require("terser-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const publicPath = path.resolve(__dirname, "../public")
const buildPath = path.resolve(__dirname, "../build")

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js",
    path: buildPath,
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 1048576, // 1 MB
    maxAssetSize: 1048576, // 1 MB
  },
  plugins: [
    new CleanWebpackPlugin({
      root: buildPath,
    }),
    new CopyPlugin([
      { from: `${publicPath}/assets`, to: `${buildPath}/assets` },
    ]),
    //new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})
