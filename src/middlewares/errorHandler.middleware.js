export const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    statusCode: 500,
    path: req.url,
    message: 'Something broke!'
  })
}
