const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')({ origin: true })
const db = require('../db')
const AppRouter = require('../routes/AppRouter')

const server = express()


server.use(cors({
    origin: 'https://restaurant-inventory-77229.web.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
server.use(express.json())

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://restaurant-inventory-77229.web.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
server.use('/api', AppRouter)
server.get('/', (req, res) => {
    res.send('I am root!')
})


// server.listen(PORT, () => {
//     console.log(`Express server listening on port ${PORT}`)
// })

exports.app = functions.https.onRequest(server);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
