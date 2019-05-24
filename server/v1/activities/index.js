import express from 'express'

const router = express.Router()

import { Activities } from '../../models/activities'

router.get('/detailfromdb/:id', async (req, res) => {
  const { params: { evento } } = req
  try {
    const { tipo, descripcion, evento } = await Activities.findOne(evento).lean().select('tipo descripcion evento')
    res.json({ success: true, activities: { tipo, descripcion, evento } })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

export default router
