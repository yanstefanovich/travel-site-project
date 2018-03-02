const path = require('path');

module.exports = {
  entry: {
    app: './app/assets/scripts/app.js',
    vendor: './app/assets/scripts/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  }
}
