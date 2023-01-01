const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function override(config, env) {
  return merge(config, {
    resolve: {
      alias: {
        lodash: path.resolve(__dirname, 'node_modules/lodash'),
        moment: path.resolve(__dirname, 'node_modules/moment'),
      },
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|@sentry|@apollo|graphql|formik|yup)[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 9,
            reuseExistingChunk: true,
          },
          commons: {
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: 8,
          },
        },
      },
    },
    plugins: [
      // new BundleAnalyzerPlugin(), // For analysing the bundle size
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 30,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.IgnorePlugin(/./, /^\.\/@ant-designs\/icons/),
      // new webpack.IgnorePlugin({
      //   checkResource(resource) {
      //     return !!resource.match(/@ant-design\/icons/);
      //   },
      // }),
    ],
  });
};
