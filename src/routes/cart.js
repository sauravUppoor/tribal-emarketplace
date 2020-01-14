const express = require('express')
const Cart = require('../models/cart')
const Product = require('../models/product')
const passport = require('passport')
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth')
const router = new express.Router()

router.post('/add-cart/:id', async(req, res)=>{
    const _id = req.params.id
    console.log(_id)
    try{
        const product = await Product.findById(_id)
        const cart = new Cart({
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            image1: product.image1,
            image2: product.image2,
            image3: product.image3
        })
        await cart.save()
        res.send(cart)
    }catch(e){
        res.send('Error')
    }
})

module.exports = router