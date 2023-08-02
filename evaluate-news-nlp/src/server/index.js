const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const meaningCloud = require('./meaningCloud.js')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const port = 8080;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Listening on port http://localhost:${port}`)
})

// post request for meaning cloud
app.post('/meaningCloud', meaningCloud.getAnalysis)

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
