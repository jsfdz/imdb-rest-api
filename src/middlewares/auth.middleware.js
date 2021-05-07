import { verifyToken } from '../auth/jwt.auth'

export const auth = async (req, res, next) => {
  const token = req.headers['access-token']

  if (!token) {
    next(res.status(401).json({
      statusCode: 401,
      message: '¡Se requiere el token!'
    }))
    return
  }

  try {
    const payload = verifyToken(token)
    req.user = payload.user
    next()
  } catch (err) {
    next(res.status(401).json({
      statusCode: 401,
      message: 'El token no es válido'
    }))
  }
}
