import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {text: 'Template setup!'})
})

export default router
