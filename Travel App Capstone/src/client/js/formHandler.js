
//Submit or save trip button
const handleSubmit = async (e) => {
    e.preventDefault();

    //Collect all input
    const dateFrom = document.getElementById('thisDate').value;
    const dateTo = document.getElementById('thisDateTo').value;
    const goingToField = document.getElementById('goingTo').value;

    //Check first if the fields are filled out
    if(!checkValidation(goingToField, dateFrom, goingToField))
    {
        alert("Please fill out all fields!");
        return 0;
    }

    //Add post going to the server 
    const differenceOfDates = datediff(dateFrom, dateTo)
    const geoData = await post('http://localhost:8081/getGeoNamesDataApi', { cityName: goingToField });
    const weatherBitData = await post('http://localhost:8081/weatherBitDataApi', { longitude: geoData.geonames[0].lng, latitude: geoData.geonames[0].lat });
    const pixabayData = await post('http://localhost:8081/getPixabayDataApi', { cityName: goingToField });
    try {
        //Check if the difference of date is not negative, date from should be less than date to
        if(differenceOfDates >= 0)
        {
            //Error handling when pixabay has a problem with the large url image
            if(pixabayData.totalHits == 0 || pixabayData == null)
            {
                alert("No city found!");
                return 0;
            }
        updateUI(
            {
                data: {
                    high_temp: weatherBitData.data[0].high_temp,
                    low_temp: weatherBitData.data[0].low_temp,
                    description: weatherBitData.data[0].weather.description,
                    foreCastIcon: weatherBitData.data[0].weather.icon,
                    cityURL: pixabayData.hits[0].largeImageURL,
                    thisDaysAway: differenceOfDates,
                    cityName: goingToField
                }
            });
        }
        else
        {
            //Error handling
            alert("Error: Date from and date to field is invalid! Please check your dates if it is right.")
        }
    }
    catch (error) {
        //Error handling
        console.log(error)
        alert("Something went wrong" + error)
    }
}


//Calculate date difference in order to get the length of days
function datediff(dateFrom, dateTo) {
    var start = dateFrom; // yyyy-mm-dd format
    var end =  dateTo; // yyyy-mm-dd format
    var date1 = new Date(start);
    var date2 = new Date(end);
    
    var diffDays = Math.ceil(parseInt((date2 - date1) / (24 * 3600 * 1000)));
    return diffDays;
}

//This will check the validation of the fields
function checkValidation(goingToValidation, dateFromValidation, dateToValidation){
    if((goingToValidation.length == 0) || (dateFromValidation.length == 0) || (dateToValidation.length == 0))
    {
        return false;
    }
    return true;
}


//Post method
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try {
        return await response.json()
    }
    catch (error) {
        console.log(error)
    }
}

//Update UI results
const updateUI = ({ data }) => {
    const titleResult = `Typical weather for then is: `;
    const highTemp = `High: ${data.high_temp} °C`;
    const lowTemp = `Low: ${data.low_temp} °C`;
    const averageTemp =`Weather Description: ${data.description} <img id = "foreCastIcon" src = "https://www.weatherbit.io/static/img/icons/${data.foreCastIcon}.png", alt="icon">`;
    const daysAway = `Length: Your travel in ${data.cityName} will be ${data.thisDaysAway} day/s length.`;

    document.getElementById("img-city-photo").src = data.cityURL;

    const result = `<div class="col grid_1_of_1">
                        <ul class="entryResult">
                            <li id="titleResult">${titleResult}</li>
                            <li id="highTemp">${highTemp}</li>
                            <li id="lowTemp">${lowTemp}</li>
                            <li id="averageTemp">${averageTemp}</li>
                            <li id="daysAway">${daysAway}</li>
                        </ul>
                    </div>`
    
    
    document.getElementById("results").innerHTML = result;
}

export { post }
export { handleSubmit }

