## Project Objective

- This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS. You will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

- It is a travel application. It’s common to pull basic data from an API, but many applications don’t just pull the weather, they pull in multiple types of data, from different sources and occasionally one API will be required to get data from another API.

## Technologies and Languages Used

- Backend-Server:
  - ExpressJS(NodeJS)
  - Async/Await
- UI (Front-end):
  - Vanilla Javascript
  - Sass
  - HTML
- Tools:
  - Webpack
- Testing:
  - Jest
- Service Worker

## 2. Project Extension

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Incorporate icons into forecast.
- Allow user to Print their trip and/or export to PDF.


## 3. API Credentials

* Create an user account at [Geonames](https://www.geonames.org/ "Geonames"), [WeatherBit](https://www.weatherbit.io/ "WeatherBit") and [Pixabay](https://pixabay.com/ "Pixabay") respectively to obtain the API keys.
* Create a file named `.env` with the following code and your API credentials.
```
GEONAMES_USERNAME=**************************
GEONAMES_API_URL=**************************
WEATHERBIT_API_URL=**************************
WEATHERBIT_API_KEY=**************************
PIXABAY_API_URL=**************************
PIXABAY_API_KEY=**************************
SERVER_PORT=8081
```
### Step 4: Installation

- npm install
- npm run build-dev (for development)
- npm run build-prod (for production)


### Step 5: Test

- Configure by npm run test and the tests folder will run. 
- npm run test
