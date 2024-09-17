const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: "./src/main/main.js",
    target: "electron-main",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
  },
  {
    mode: "development",
    entry: "./src/renderer/index.js",
    target: "electron-renderer",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "renderer.js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/renderer/index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  },
];
