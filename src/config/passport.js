const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Customer = require('../models/customer')

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done)=>{
            Customer.findOne({ email  }).then(customer=>{
                if(!customer){
                    return done(null, false, {message: 'Email not registered'})
                }
                bcrypt.compare(password, customer.password, (err, isMatch)=>{
                    if(err) throw err
                    if(isMatch){
                        return done(null, customer)
                    }else{
                        return done(null, false, { message: 'Password incorrect' })
                    }
                })
                
            }).catch(err=>{
                console.log('Error')
            })
        })
    )
    passport.serializeUser(function(customer, done){
        done(null, customer.id)
    })
    passport.deserializeUser(function(id, done){
        Customer.findById(id, (err, customer)=>{
            done(err, customer)
        })
    })
}