const express = require("express")
const ejs = require("ejs")
const app = express()
const path = require("path")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:/basic-blog")

const Bookmarks = require('./models/Bookmarks')
const Education = require('./models/Education')

app.use(express.static("public"))
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.set("view engine", "ejs")

// index page
app.get("/", (req,res) => {
    res.render("index", {pageName: "intro"})
})

// education page
app.get("/education", (req,res) => {
    res.render("education", {pageName: "education"})
})

// photos page
app.get("/photos", (req,res) => {
    res.render("photos", {pageName: "photos"})
})

// apps page
app.get("/bookmarks", (req,res) => {
    res.render("bookmarks", {pageName: "bookmarks"})
})

app.listen(3000, ()=>{
    console.log("Server çalışıyor: http://localhost:3000");
})
