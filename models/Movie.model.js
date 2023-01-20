const mongoose = require('mongoose')
const { Schema } = mongoose

const movieSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: Array,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    showtimes:{
        type: Array,
        required: true
    },
})

const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie