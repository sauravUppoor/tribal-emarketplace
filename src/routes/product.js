const express = require('express')
const Product = require('../models/product')
const passport = require('passport')
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth')
const router = new express.Router()

router.post('/add-product', async(req, res)=>{
    const product = new Product(req.body)
    try{
        await product.save()
        res.redirect('/all-products')
    }catch(e){
        res.redirect('/add-product')
    }
})

router.get('/add-product', (req, res)=>{
    res.send('HI')
})

router.get('/all-products', async(req, res)=>{
    try{
        //console.log('Try')
        const products = await Product.find({ name: 'art' })
        res.send(products)
    }catch(e){
        res.send('error')
    }
})

//View all products
router.get('/all-product', async(req, res)=>{
    try{
        //console.log('Try')
        const products = await Product.find({ })
        res.send(products)
    }catch(e){
        res.send('error')
    }
})

router.get('/products/art', async(req, res)=>{
    try{
        const arts = await Product.find({ category: 'art' })
        if(!arts){
            res.send('No results found')
        }
        res.send(arts)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/painting', async(req, res)=>{
    try{
        const paintings = await Product.find({ category: 'painting' })
        if(!paintings){
            res.send('No results found')
        }
        res.send(paintings)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/food-products', async(req, res)=>{
    try{
        const food = await Product.find({ category: 'food-products' })
        if(!food){
            res.send('No results found')
        }
        res.send(food)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/handicrafts', async(req, res)=>{
    try{
        const hand = await Product.find({ category: 'handicrafts' })
        if(!hand){
            res.send('No results found')
        }
        res.send(hand)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/clothing', async(req, res)=>{
    try{
        const clothes = await Product.find({ category: 'clothes' })
        if(!clothes){
            res.send('No results found')
        }
        res.send(clothes)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/forest-products', async(req, res)=>{
    try{
        const forest = await Product.find({ category: 'forest-products' })
        if(!forest){
            res.send('No results found')
        }
        res.send(forest)
    }catch(e){
        res.send('Error')
    }
})

router.get('/products/:id', async(req, res)=>{
    const _id = req.params.id
    try{
        const product = await Product.findById(_id)
        res.send(product)
    }catch(e){
        res.send(error)
    }
})

//Add route for viewing 

module.exports = router