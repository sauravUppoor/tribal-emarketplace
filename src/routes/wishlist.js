const express = require('express')
const Wishlist = require('../models/wishlist')
const passport = require('passport')
const Product = require('../models/product')
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth')
const router = new express.Router()

router.post('/add-wishlist/:id', async(req, res)=>{
    const _id = req.params.id
    console.log(_id)
    try{
        const product = await Product.findById(_id)
        const wishlist = new Wishlist({
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            image1: product.image1,
            image2: product.image2,
            image3: product.image3
        })
        await wishlist.save()
        res.send(wishlist)
    }catch(e){
        res.send(e)
    }
})

// router.get('/:id', (req, res)=>{
//     const _id = req.params.id
//     res.send(_id)
// })

router.get('/wishlist', async(req, res)=>{
    try{
        const items = await Wishlist.find({  })
        res.send(items)
    }catch(e){
        res.send('Error')
    }
})

module.exports = router