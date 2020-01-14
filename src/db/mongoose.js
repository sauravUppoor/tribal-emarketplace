const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tribal-store',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (error)=>{
    if(!error){
        console.log('Connected to MongoDB')
    }else{
        console.log('Error\n', error)
    }
}
)

