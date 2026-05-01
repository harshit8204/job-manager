const { StatusCodes } = require('http-status-codes')
const { CustomAPIError } = require('../errors')

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  if (err.name === 'ValidationError') {
    const msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ')
    return res.status(StatusCodes.BAD_REQUEST).json({ msg })
  }
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `${field} already exists` })
  }
  if (err.name === 'CastError') {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Invalid id format' })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandler
