const express = require('express')

const app = express()

app.get('/:thing', (req, res) => {
  const thing = req.params.thing
  res.send(thing)
})

app.post('/', (req, res) => {
  res.send({sample: "sample"})
})

app.listen(8080)
console.log('listening on localhost:8080...')
