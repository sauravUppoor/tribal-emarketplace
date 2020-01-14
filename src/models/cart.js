const mongoose = require('mongoose')
const validator = require('validator')

const cartSchema = new mongoose.Schema({
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
    },
    status:{
        type: String,
        //required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart