const withSass = require('@zeit/next-sass');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader"]
      }
    );
    config.module.config.push({
        pages: path.resolve(__dirname, './pages'),
        components: path.resolve(__dirname, './src/components')
    });
    return config;
  }
};

module.exports = withSass();
