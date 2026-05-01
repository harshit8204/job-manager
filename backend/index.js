require('express-async-errors')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const jobRoutes = require('./routes/jobs')
const authRoutes = require('./routes/auth')
const connectDB = require('./db/connect')
const errorHandler = require('./middlewares/errorHandler')
const authenticate = require('./middlewares/authenticate')

const app = express()
const port = process.env.PORT || 3000
const requiredEnv = ['MONGO_URI', 'JWT_SECRET']

app.use(cors())
app.use(express.json())
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})
app.use('/api/v1/jobs', authenticate, jobRoutes)
app.use('/api/v1/auth', authRoutes)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    const missingEnv = requiredEnv.filter((key) => !process.env[key])
    if (missingEnv.length) {
      throw new Error(`Missing required environment variables: ${missingEnv.join(', ')}`)
    }
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server started on port ${port}...`))
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

start()
