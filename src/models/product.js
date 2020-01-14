const mongoose = require('mongoose')
const validator = require('validator')

const productSchema = new mongoose.Schema({
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
        lowercase: true,
        validate(value){
            const types = ['art', 'painting', 'food-products', 'handicrafts', 'clothes', 'forest-products']
            if(!types.includes(value)){
                throw new Error('Category not valid')
            }
        }
    },
    stock:{
        type: Number,
        required: true,
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

const Product = mongoose.model('Product', productSchema)
module.exports = Product