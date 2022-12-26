import express from "express";
import * as userController from '../controllers/usersController.js'

const router = express.Router()

// Test route
router.get('/', (req, res) => {
	res.json({message: 'API setup!'})
})

// Users
router.get('/users', async (req, res) => {
	res.json(await userController.index())
})
router.get('/users/:id', async (req, res) => {
	res.json(await userController.show(req.params.id))
})
router.post('/users', async (req, res) => {
	res.json(await userController.store(req.body))
})
router.put('/users/:id', async (req, res) => {
	res.json(await userController.update(req.params.id, req.body))
})
router.delete('/users/:id', async (req, res) => {
	res.json(await userController.destroy(req.params.id))
})

export default router
