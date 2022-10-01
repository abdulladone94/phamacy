import express from 'express'
import authRoutes from './routes/auth'

const app = express()
const port = 8080

// app.get('/', (req, res) => {
//   res.send('Hellow World for Cheching')
// })

app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
