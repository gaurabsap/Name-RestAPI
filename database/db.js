const mongoose = require('mongoose')


const ConnectDb = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Name')
        console.log('Db connected')
    } catch(err) {
        console.log('Failed to connect')
    }
}


module.exports = ConnectDb;