import { handleError } from '../errors/handler.error'

export const errorHandler = (err, req, res, next) => {
  handleError(err, res)
}
