const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

app.use(cors({ origin: ['localhost:8080'], credentials: true }))
app.use(express.json({ limit: '10mb', extended: true }))

fs.readdirSync('./src/routes/').forEach(file => {
  require(`./src/routes/${file}`)(app)
})

app.listen(8080, () => {
  console.log('El servidor está corriendo en el puerto 8080.')
})
