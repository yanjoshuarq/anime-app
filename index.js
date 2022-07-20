const express = require("express")
// npm install express
const app = express()
const path = require("path")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
// npm install ejs

// this starter pack uses ejs as a display library for html you can use the library you like

app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/", (req, res) => {
   res.render("index")
})
app.get("/downloads", (req, res) => {
   res.render("downloads")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`working on port ${port}`)
})