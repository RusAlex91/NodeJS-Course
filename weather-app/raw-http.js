const https = require("https")
const url = `https://api.darksky.net/forecast/8a0045d572520f63c6299049baafdfb2/40,-75`

const request = https.request(url, (response) => {
  let data = ""

  response.on("data", (chunk) => {
    data = data + chunk.toString()
  })

  response.on("end", () => {
const body = JSON.parse(data)
console.log(body);
  })
})
request.on("error", (error) => {
  console.log("errorrr", error);
})

request.end()
