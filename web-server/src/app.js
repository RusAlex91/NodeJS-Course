const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

//Define path for Epxress config
const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirPath))

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Alex"
  })
})
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Alex"
  })
})
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    msg: "some text",
    name: "Alex"
  })
})

app.get("/weather", (req, res) => {
  res.send("<h1>Weather")
})

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "help 404"
  })
})

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "404"
  })
})

app.listen(3000, () => {
  console.log("server up on port 3000.");
})
