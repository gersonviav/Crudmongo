import express from 'express'

const router = express.Router()

import { Users } from '../../models/user'
import { Activities } from '../../models/activities'

const users = {
  A: {
    _id     : '1',
    name    : 'Donald',
    lastName: 'Trump',
    mobile  : '+51999999999',
    email   : 'donal@trump.com',
    password: '123456'
  },
  B: {
    _id     : '2',
    name    : 'Vladimir',
    lastName: 'Putin',
    mobile  : '+51999999999',
    email   : 'vladimird@putin.com',
    password: '654321'
  }
}

const arrUsers = [
  {
    _id     : '1',
    name    : 'Donald',
    lastName: 'Trump',
    mobile  : '+51999999999',
    email   : 'donal@trump.com',
    password: '123456'
  },
  {
    _id     : '2',
    name    : 'Vladimir',
    lastName: 'Putin',
    mobile  : '+51999999999',
    email   : 'vladimird@putin.com',
    password: '654321'
  }
]

router.get('/detailfromdb/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const { email, name, thinks } = await Users.findById(id).lean().select('email name thinks')
    res.json({ success: true, user: { email, name, thinks} })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
//post
router.post('/detailpost', async (req, res) => {
  const {body} =req
  console.log(body)

  try {
               await Users.create(body)     
    res.json({ success: true, user:'body'});
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
//update
router.put('/detailupdate/:id', async (req, res) => {
  const {body} =req
  const {params:{id}}=req
  try {
            let user=   await  Users.findOneAndUpdate({_id:id},body)
    res.json({ success: true, user});
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
//get
//delete
router.delete('/delete/:id', async (req, res) => {
 
  const {params:{id}}=req
  try {
            let userd=   await  Users.findOneAndRemove({_id:id})
    res.json({ success: true, userd});
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
router.get('/detailfromdbActivities/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const { tipo, descripcion, evento } = await Activities.findById(id).lean().select('tipo descripcion evento')
    res.json({ success: true, activities: { tipo, descripcion, evento } })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

router.get('/detailobj/:id', (req, res) => {
  const { params: { id } } = req
  const { A, B } = users
  let results
  if(A._id == id)
    results = A
  results = B
  res.json(results)
})

router.get('/detailarr/:id', (req, res) => {
  const { params: { id } } = req
  try {
    const [ results ] = arrUsers.filter(el=> el._id === id)
    res.json({  results })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

export default router
