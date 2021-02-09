module.exports = {
    poweredByHeader: false,
    webpack: {
        module: {
          loaders: [
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
          ]
        }
      }
}