const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => res.json({ message: 'Server Works' }))