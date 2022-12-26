import express from 'express'
import webRouter from './routes/web.js'
import apiRouter from './routes/api.js'
const app = express()

app.set('view engine', 'ejs')

app.use('/', webRouter)
app.use('/api', apiRouter)

app.listen(3000)
