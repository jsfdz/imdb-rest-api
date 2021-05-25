import { JsonWebTokenError } from 'jsonwebtoken'

export class ErrorHandler extends Error {
  constructor (statusCode, message, trace) {
    super()
    this.statusCode = statusCode
    this.message = message
    this.trace = trace
  }
}

export const handleError = (err, res) => {
  const { statusCode = 500, message } = err
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}

const errorParse = (error, next) => {
  if (error instanceof JsonWebTokenError) {
    next(new ErrorHandler(
      400,
      error.message,
      error.stack
    ))
  } else if (error instanceof ErrorHandler) {
    next(error)
  } else if (error.name === 'SequelizeValidationError') {
    const errObj = {}
    error.errors.forEach((er) => {
      errObj[er.path] = er.message
    })
    next(new ErrorHandler(
      400,
      errObj,
      error.stack
    ))
  } else {
    next(new ErrorHandler(
      500,
      'Error Perfoming Action',
      error.stack
    ))
  }
}

export const handlerExceptionRoute = (fn) => (req, res, next) => {
  try {
    const route = fn(req, res, next)

    if (route instanceof Promise) {
      route?.catch((error) => {
        errorParse(error, next)
      })
    }
  } catch (error) {
    errorParse(error, next)
  }
}
