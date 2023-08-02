//Add node fetch for fetching the data
const fetch = require('node-fetch')

//Environment keys
const {
    GEONAMES_USERNAME, 
    GEONAMES_API_URL,
    WEATHERBIT_API_URL,
    WEATHERBIT_API_KEY,
    PIXABAY_API_URL,
    PIXABAY_API_KEY,
} = process.env


// API/s
// Async GET Geo names data 
const getGeoNamesDataApi = async (req, res) => {
    const { cityName } = req.body
    const result = await fetch(`${GEONAMES_API_URL}?name=${cityName}&maxRows=1&username=${GEONAMES_USERNAME}`);
    try {
        const data = await result.json();
        return res.send(data);
    } catch (error) {
        console.log("error1:", error);
    }
}

// Async GET weather bit data
const weatherBitDataApi = async (req, res) => {
    const { latitude, longitude } = req.body
    const result = await fetch(`${WEATHERBIT_API_URL}?lat=${latitude}&lon=${longitude}&key=${WEATHERBIT_API_KEY}`);
    try {
        const data = await result.json();
        return res.send(data);
    } catch (error) {
        console.log("error2:", error);
    }
}

// Async GET pixabay data
const getPixabayDataApi = async (req, res) => {
    const { cityName } = req.body
    const result = await fetch(`${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${cityName}&image_type=photo&page=1&per_page=3&orientation=horizontal`);
    try {
        const data = await result.json();
        return res.send(data);
    } catch (error) {
        console.log("error3:", error);
    }
}

module.exports = {
    getGeoNamesDataApi,
    weatherBitDataApi,
    getPixabayDataApi
}