const ConnectDb = require('./database/db')

const PostData = require('./database/schema')
const api = require('./Api.json')

const Post = async() => {
    try{
        await ConnectDb()
        await PostData.create(api)
    } catch(err) {
        console.log(err)
    }
}

Post()