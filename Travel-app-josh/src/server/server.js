//import installation of the libraries
require('dotenv').config();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//API/s
const endpointsApi = require('./apiEndpoints.js')

const mockAPIResponse = require('./mockAPI.js')
const { SERVER_PORT } = process.env

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //TODO use dist 
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(SERVER_PORT, function () {
    console.log(`Listening on port http://localhost:${SERVER_PORT}`)
})

//POSTS:
// post request for geonames api
app.post('/getGeoNamesDataApi', endpointsApi.getGeoNamesDataApi)

// post request for weatherbit api
app.post('/weatherBitDataApi', endpointsApi.weatherBitDataApi)

// post request for pixabay api
app.post('/getPixabayDataApi', endpointsApi.getPixabayDataApi)


//Test
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})