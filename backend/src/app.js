import express from 'express'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import preferenceRoutes from './routes/preferenceRoutes.js'
import newsRoutes from './routes/newsRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Nuzio API is running',
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/preferences', preferenceRoutes)
app.use('/api/news', newsRoutes)

export default app