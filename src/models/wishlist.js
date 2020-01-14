const mongoose = require('mongoose')
const validator = require('validator')

const wishlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        lowercase: true
    },
    price:{
        type: Number,
        required: true
    },
    image1:{
        type: String,
        required: true
    },
    image2:{
        type: String,
        required: true
    },
    image3:{
        type: String,
        required: true
    }
})

const Wishlist = mongoose.model('Wishlist', wishlistSchema)
module.exports = Wishlist