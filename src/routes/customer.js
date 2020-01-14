const express = require('express')
const Customer = require('../models/customer')
const passport = require('passport')
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth')
const router = new express.Router()

router.post('/customer/register', async (req, res)=>{
    const customer = new Customer(req.body)
    try{
        await customer.save()
        res.send(customer)
    }catch(e){
        res.status(400).send('Error in registration')
    }
})

router.get('/customer/login', (req, res)=>{
    res.send("login page")
})

router.post('/customer/login', async(req, res, next)=>{
    passport.authenticate('local', {
        successRedirect: '/customer/home',
        failureRedirect: '/customer/login',
        failureFlash: false
    })(req, res, next)
})

router.get('/customer/home', (req, res)=>{
    res.send('Home Page ')
})

router.get('/customer/:id', async(req, res)=>{
    const _id = req.params.id
    try{
        const customer = await Customer.findById({ _id: _id })     
        if(!customer){
            res.redirect('/customer/home')
        }else{
            res.send(customer)
        }
    }catch(e){
        res.redirect('/customer/login')
    }
})

router.get('/customer/logout', (req, res)=>{
    req.logout()
    res.redirect('/customer/login')
})

module.exports = router