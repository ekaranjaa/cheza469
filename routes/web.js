import express from 'express'
const router = express.Router()

// Test route
router.get('/', (req, res) => {
	res.render('index', {text: 'Template setup!'})
})

export default router
