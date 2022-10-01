import express from 'express'

const routes = express.Router()

routes.post('/signup', async (req, res) => {
  res.send('Signin successfully')
})

export default routes
