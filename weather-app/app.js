const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const userInput = process.argv[2]
if (!userInput) {
  return console.log("no location was provided");
}
geocode(userInput, (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  })
})
