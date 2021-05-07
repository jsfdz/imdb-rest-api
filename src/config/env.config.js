import { config } from 'dotenv'
config()

const ENV = process.env

export const HOST_DB = ENV.HOST_DB
export const USER_DB = ENV.USER_DB
export const PASS_DB = ENV.PASS_DB
export const NAME_DB = ENV.NAME_DB
export const PORT_DB = ENV.PORT_DB
export const PORT = ENV.PORT || 3001
export const JWT_SECRET = ENV.JWT_SECRET
export const TOKEN_EXPIRY_TIME = ENV.TOKEN_EXPIRY_TIME
export const JWT_ALGORITHM = ENV.JWT_ALGORITHM
