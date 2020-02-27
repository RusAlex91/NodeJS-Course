const request = require("request")
const forecast = (latitude, longitude, callback) => {

  const url = `https://api.darksky.net/forecast/8a0045d572520f63c6299049baafdfb2/${latitude},${longitude}`
  request({
    url,
    json: true
  }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} Its is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. Sunrise at ${formattedTime(body.daily.data[0].sunriseTime)}. Sunset at ${formattedTime(body.daily.data[0].sunsetTime)}.`)
    }
  })
}
module.exports = forecast

function formattedTime(time) {
let unix_timestamp = time
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTimeResult = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log(formattedTimeResult);
}

formattedTime(body.daily.data[0].sunriseTime)
