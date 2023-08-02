const fetch = require('node-fetch')

const {
    API_KEY, 
    API_URL
} = process.env

// Async GET
const getAnalysis = async (req, res)=>{
    console.log(req.body);
    const { body: { url } } = req;
    const response = await fetch(`${API_URL}?key=${API_KEY}&url=${url}&lang=en`)
    console.log(response);
    try {
        const data = await response.json();
        console.log(data);
        console.log('success');
        return res.send(data);
    }
    catch(error) {
        console.log('error', error);
    }
}

module.exports = {
    getAnalysis,
}