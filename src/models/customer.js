const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true, 
        unique: true,
        trim: true,
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password:{
        type: String,
        trim: true,
        required:true,
        minlength: 8
    },
    age:{
        type: Number,
        required: true,
        validate(value){
            if(value<18){
                throw new Error('Age is not valid')
            }
        }
    },
    address:{
        type: String,
        required: true
    },
    state:{
        type: String,
        lowecase: true,
        required: true,
        validate(value){
            const States = ['andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat', 'haryana', 'himachal pradesh', 'jharkhand', 'karnataka', 'kerala', 'madhya pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil nadu', 'telangana', 'tripura', 'uttar pradesh', 'uttarakhand', 'west bangal']
            if(!States.includes(value.toLowerCase())){
                throw new Error('State not valid')
            }
        }
    },
    phone:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Mobile Phone number not valid')
            }
        }
    }
})

customerSchema.pre('save', async function(next){
    const customer = this
    if(customer.isModified('password')){
        customer.password = await bcrypt.hash(customer.password, 8)
    }
    next()
})  

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer