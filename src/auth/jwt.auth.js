import { sign, verify } from 'jsonwebtoken'
import { JWT_SECRET, TOKEN_EXPIRY_TIME, JWT_ALGORITHM } from '../config/env.config'

export const generateToken = (payload) => {
  const token = sign(payload, JWT_SECRET, {
    algorithm: JWT_ALGORITHM,
    expiresIn: TOKEN_EXPIRY_TIME
  })
  return token
}

export const verifyToken = (token) => {
  const payload = verify(token, JWT_SECRET)
  return payload
}
