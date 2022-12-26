import express from "express";
import * as usersController from '../controllers/usersController.js'
import * as gamesController from '../controllers/gamesController.js'

const router = express.Router()

// Test route
router.get('/', (req, res) => {
	res.json({message: 'API setup!'})
})

// Users
router.get('/users', async (req, res) => {
	res.json(await usersController.index())
})
router.get('/users/:id', async (req, res) => {
	res.json(await usersController.show(req.params.id))
})
router.post('/users', async (req, res) => {
	res.json(await usersController.store(req.body))
})
router.put('/users/:id', async (req, res) => {
	res.json(await usersController.update(req.params.id, req.body))
})
router.delete('/users/:id', async (req, res) => {
	res.json(await usersController.destroy(req.params.id))
})

// Games
router.get('/games', async (req, res) => {
	res.json(await gamesController.index())
})
router.get('/games/:id', async (req, res) => {
	res.json(await gamesController.show(req.params.id))
})
router.post('/games', async (req, res) => {
	res.json(await gamesController.store(req.body))
})
router.put('/games/:id', async (req, res) => {
	res.json(await gamesController.update(req.params.id, req.body))
})

export default router
