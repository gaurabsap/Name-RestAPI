
const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    Country: String,
    Gender: String,
    Name: Array
})


const PostData = mongoose.model('NameData', schema)

module.exports = PostData;