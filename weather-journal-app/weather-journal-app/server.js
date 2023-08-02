// Setup empty JS object to act as endpoint for all routes
var projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Spin up the server
// Setup Server
const server = app.listen(port, listening)
function listening() {
    console.log(`running on localhost: ${port}`);
}

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/all', (request, response)=> {
    response.send(projectData);
});


// Post Route
app.post('/add', addResponse);

function addResponse(req, res){
    console.log(req.body);
    let newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content,
        city: req.body.city,
    }
    Object.assign(projectData, newEntry);
    res.send(projectData);
}