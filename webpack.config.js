const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: {
    main: `./src/main.js`,
    catalog: "./src/scripts/catalog.js",
    about: "./src/scripts/about.js",
    cart: "./src/scripts/cart.js",
    signin: "./src/scripts/signin.js",
    signup: "./src/scripts/signup.js",
    productPage:'./src/scripts/productPage.js',
    blog:'./src/scripts/blog.js',
    room:'./src/scripts/room.js'
  },
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, `build`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: `babel-loader`
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      filename: "catalog.html",
      template: `./public/pages/catalog.html`,
      chunks: ["catalog"]
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: `./public/pages/product.html`,
      chunks: ["productPage"]
    }),
    new HtmlWebpackPlugin({
      filename: "room.html",
      template: `./public/pages/room.html`,
      chunks: ["room"]
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: `./public/pages/blog.html`,
      chunks: ["blog"]
    }),
    new HtmlWebpackPlugin({
      filename: "signin.html",
      template: `./public/pages/signin.html`,
      chunks: ["signin"]
    }),
    new HtmlWebpackPlugin({
      filename: "signup.html",
      template: `./public/pages/signup.html`,
      chunks: ["signup"]
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: `./public/pages/about.html`,
      chunks: ["about"]
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      template: `./public/pages/cart.html`,
      chunks: ["cart"]
    }),
    new HtmlWebpackPlugin({
      filename: "faq.html",
      template: `./public/pages/faq.html`,
      chunks: []
    }),
    new CopyPlugin([
      { from: `./public/css`, to: `css` },
      { from: `./public/img`, to: `img` }
    ])
  ]
};
