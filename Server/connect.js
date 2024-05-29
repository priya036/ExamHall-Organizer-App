const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect("mongodb+srv://priyadharshini:5799@cluster0.wtx7up8.mongodb.net/")
}


// mongodb://127.0.0.1:27017/Hall  --> it is for local connection