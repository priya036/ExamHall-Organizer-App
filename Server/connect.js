const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Hall")
}

// mongodb://127.0.0.1:27017/Hall  --> it is for local connection