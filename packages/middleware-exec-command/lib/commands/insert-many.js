const { prop } = require('ramda')

const callback = prop('ops')

module.exports = function insertMany (col, args) {
  const { data, options } = args

  return col
    .insertMany(data, options)
    .then(callback)
}