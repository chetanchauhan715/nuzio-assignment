import express from 'express'
import { personalizedNews } from '../controllers/newsController.js'

const router = express.Router()

router.post('/personalized', personalizedNews)

export default router