export const notFountHandler = (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    path: req.url,
    message: 'Ooops!!!, Error 404'
  })
}
