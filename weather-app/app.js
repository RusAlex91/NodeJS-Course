const request = require("request");

// const url = "https://api.darksky.net/forecast/8a0045d572520f63c6299049baafdfb2/37.8267,-122.4233?units=us"
// request({
//   url: url,
//   json: true
// }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect, check internet connection");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(`${response.body.daily.data[0].summary} Its is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
//   }
//
// })
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Lossssss%20Angeles.json?access_token=pk.eyJ1IjoicnVzYWxleCIsImEiOiJjazZ1aGZuaDIwNTN2M2VvYWVrbW45eTd2In0.k187H5s4Bvd2lfiZMUqCtg"
// request({
//   url: geocodeURL,
//   json: true
// }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location service");
//   } else if (response.body.features.length === 0) {
//     console.log("location not found");
//   } else {
//     console.log(`latigude:${response.body.features[0].center[0]}, longitude:${response.body.features[0].center[1]}`);
//   }
// })

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicnVzYWxleCIsImEiOiJjazZ1aGZuaDIwNTN2M2VvYWVrbW45eTd2In0.k187H5s4Bvd2lfiZMUqCtg`
  request({
    url: url,
    json: true
  }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined)
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.",undefined)
    } else {
      callback(undefined, {
        latigude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

geocode("New York", (error, data) => {
console.log("Error", error);
console.log("Data", data);
})
