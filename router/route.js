const express = require('express')

const {CountryData, CountryAndGender} = require('../controller/userController')


const router = express.Router()

router.get('/:country', async(resq, resp) =>{
    const {country} = resq.params
    try{
        const data = await CountryData(country)
        resp.status(200).json(data)

    } catch(err){
        resp.send(404).json({
            "message": "Something Wrong!!"
        })
    }
})

router.get('/:country/:gender', async(resq, resp) => {
    const {country, gender} = resq.params
    console.log(country, gender)
    try{
        const datas = await CountryAndGender(country, gender)
        resp.status(200).json(datas)
    } catch(err) {
        resp.send(404).json({
            "message": "Something Wrong!!"
        })
    }
})



module.exports = router;