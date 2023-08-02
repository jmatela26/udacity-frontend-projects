/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=f38009cd9387aa92be1023c055440143&units=metric'

// Create a new date instance dynamically with JS
let d = new Date().toDateString();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeatherApi(baseURL, zipCode, apiKey)
        .then(function (data) {
            console.log(data);
            try {
                postData('http://localhost:3000/add', {
                    date: d,
                    temp: data.main.temp,
                    content: feelings,
                    city: data.name,
                })
                //Update the entry response
                updateResponse();

                console.log("success!");
            }
            //Error handling
            catch(error) {
                ClearFields();
                window.alert("Invalid Zip Code!");
                console.log("failed! " + error);
                return data;
            }
        })
};

//clearing the input fields
function ClearFields() {
    document.getElementById("zip").value = "";
    document.getElementById("feelings").value = "";
}

/* Function to GET Web API Data*/
const getWeatherApi = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + zipCode + apiKey)
    try {
        const getdata = await res.json();
        return getdata;
    }
    catch (error) {
        console.log("error", error);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }
    //Error handling
    catch (error) {
        console.log("error", error);
    }
}


/* Function to GET Project Data */
const updateResponse = async () => {
    const request = await fetch('http://localhost:3000/all');
    try {
        const entryResponse = await request.json();
        document.getElementById('date').innerHTML = entryResponse.date;
        document.getElementById('temp').innerHTML = entryResponse.temp + ' °C';
        document.getElementById('content').innerHTML = entryResponse.content;
        document.getElementById('city').innerHTML = entryResponse.city;
        console.log("success");
    }
    //Error handling
    catch (error) {
        console.log("error", error)
    }

}