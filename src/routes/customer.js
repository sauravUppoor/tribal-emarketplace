const express = require('express')
const ejs = require('ejs')
const Customer = require('../models/customer')
const passport = require('passport')
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth')
const router = new express.Router()

router.post('/customer-signup', async (req, res)=>{
    const data = req
    console.log(data)
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address,
        state: req.body.state,
        phone: req.body.phone
    }) 
    try{
        await customer.save()
        console.log('Done')
        res.send(customer)
    }catch(e){
        res.status(400).send('Error in registration')
    }
})
router.get('/customer-signup',(req,res)=>{
    res.render("signup-user");
});

router.get('/customer-login', (req, res)=>{
    res.render("login-customer")
})

router.post('/customer-login', async(req, res, next)=>{
    const data = req.body
    console.log(data)
    passport.authenticate('local', {
        successRedirect: '/customer/home',
        failureRedirect: '/customer-login',
        failureFlash: false
    })(req, res, next)
})

router.get('/customer/home', ensureAuthenticated, (req, res)=>{
    res.render('catalogue  ')
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