const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 5000
const basicAuth = require('express-basic-auth')

const auth = basicAuth({
  users: {
    admin: '123',
    user: '456'
  }
})

app
  .use(express.static(path.join(__dirname, '/client/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})
