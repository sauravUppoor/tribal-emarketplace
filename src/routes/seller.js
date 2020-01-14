const express = require('express')
const ejs = require('ejs')
const passport = require('passport')
const Seller = require('../models/seller')
const {ensureAuthenticated} = require('../config/auth')
const router = express.Router()


router.get('/seller/signup', (req, res)=>{
    res.render('signup-seller')
})


router.post('/seller/signup', async (req, res)=>{
    const seller = new Seller(req.body)
    try{
        await seller.save()
        res.send(seller)
    }catch(e){
        res.status(400).send('Error in registration')
    }
})
router.get('/seller/login', async (req, res)=>{
    res.send()
})

router.post('/seller/login', async(req, res, next)=>{
    passport.authenticate('local',{
        successRedirect: '/seller/home',
        failureRedirect: '/seller/login',
        failureFlash: false
    })(req, res, next)
})

router.get('/seller/home', ensureAuthenticated, (req, res)=>{
    var user = req.user
    console.log(user)
    res.send('HOME Page')
})

router.get('/seller/:id', async(req, res)=>{
    const _id = req.params.id
    try{
        const seller = await Customer.findById({ _id: _id })     
        if(!seller){
            res.redirect('/seller/home')
        }else{
            res.send(customer)
        }
    }catch(e){
        res.redirect('/seller/login')
    }
})

module.exports = router