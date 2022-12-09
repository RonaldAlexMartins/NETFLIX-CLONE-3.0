const express = require("express")
const path = require("path")

let initialPath = Path.join(__dirname, "public")

let app = express()
app.use(express.static(initialPath))

app.get("/")