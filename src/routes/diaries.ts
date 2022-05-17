import express from 'express'
import * as diaryservices from '../Services/diaryServices'
const router = express.Router()
router.get('/', (_req, res) => {
  res.send(diaryservices.getentrieswithoutsensitiveinfo())
})
router.post('/', (_req, res) => {
  res.send('saving a diary')
})
export default router
