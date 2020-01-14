const express = require('express')
const path = require('path')
require('./db/mongoose')
const customerRouter = require('./routes/customer')
const sellerRouter = require('./routes/seller')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const wishRouter = require('./routes/wishlist')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const ejs = require('ejs')

require('./config/passport')(passport)



const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.set('view engine','ejs')
app.use(express.static("views"))

// const viewsPath = path.join(__dirname, '/views')
// app.set('views', viewsPath)

app.use(customerRouter)
app.use(sellerRouter)
app.use(productRouter)
app.use(cartRouter)
app.use(wishRouter)

app.listen(PORT, console.log('Server up and running on ' + PORT))