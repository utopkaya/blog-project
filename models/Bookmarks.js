const mongoose = require("mongoose")

// Schema
const Schema = mongoose.Schema

// Bookmarks Schema
const BookmarksSchema = new Schema({
    title: String,
    description: String,
    dataCreated:{
        type: Date,
        default: Date.now()
    }
})

// Bookmarks Model
const Bookmarks = mongoose.model('Bookmarks', BookmarksSchema)

module.exports = {
    Bookmarks
}