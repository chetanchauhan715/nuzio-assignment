import express from 'express'
import { savePreferences } from '../controllers/preferenceController.js'

const router = express.Router()

router.put('/', savePreferences)

export default router