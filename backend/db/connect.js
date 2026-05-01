const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, { serverSelectionTimeoutMS: 5000 })
}

module.exports = connectDB
