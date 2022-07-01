const mongoose = require("mongoose")

// Schema 
const Schema = mongoose.Schema

// Education Schema
const EducationSchema = new Schema({
    title: String,
    description: String,
    image: String,
    dataCreated : {
        type: Date,
        default: Date.now()
    }
})

// Education Model
const Education = mongoose.model('Education', EducationSchema)

module.exports = {
    Education
}

