import app from './server'
import { PORT } from './config/env.config'
import { connect } from './database/connect.database'

const init = async () => {
  await connect()
  app.listen(PORT)
  console.log(`Server running on port: http://localhost:${PORT}`)
}

init()
