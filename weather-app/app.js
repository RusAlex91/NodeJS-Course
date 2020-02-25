const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const userInput = process.argv[2]
if (!userInput) {
  return console.log("no location was provided");
}
geocode(userInput, (error, {latitude, longitude, location}) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  })
})
