import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../swagger.json'
import { errorHandler } from './middlewares/errorHandler.middleware'
import { notFountHandler } from './middlewares/notFound.middleware'
const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(morgan('combined', { stream: fs.createWriteStream('./logs/errors.log', { flags: 'a' }) }))
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({ 'imdb-rest-api': '1.0.0' }))

app.use('/api/v1', routes)

app.use(errorHandler)

app.use(notFountHandler)

export default app
