const path = require("path")
const express = require("express")
debugger
const app = express()
const publicDirPath = path.join(__dirname,"../public")

app.set("view engine", "hbs")
app.use(express.static(publicDirPath))

app.get("",(req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Lox"
  })
})

app.get("/weather", (req, res)=> {
  res.send("<h1>Weather")
})

app.listen(3000, () => {
  console.log("server up on port 3000.");
})
