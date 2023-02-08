const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const AppRouter = require('./routes/AppRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/api', AppRouter)
app.get('/', (req, res) => {
    res.send('This is root!')
})

if (process.env.ENVIRONMENT === 'production') {
    exports.handler = serverless(app);
} else {
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`)
    })
}
