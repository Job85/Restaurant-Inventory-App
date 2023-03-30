const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const AppRouter = require('./routes/AppRouter')

const server = express()

const PORT = process.env.PORT || 3001

server.use(cors())
server.use(express.json())
server.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
server.use('/api', AppRouter)
server.get('/', (req, res) => {
    res.send('I am root!')
})


server.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

exports.app = functions.https.onRequest(server);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
