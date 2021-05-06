import { config } from 'dotenv'
config()

const ENV = process.env

export const HOST_DB = ENV.BD_HOST
export const USER_DB = ENV.DB_USER
export const PASS_DB = ENV.DB_PASSWORD
export const NAME_DB = ENV.DB_NAME
export const PORT = ENV.PORT || 3001
