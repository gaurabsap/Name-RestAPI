const PostData = require('../database/schema')

const CountryData = async(countryName) =>{
    try{
        const data = await PostData.findOne({Country: countryName})
        return data
    } catch(err) {
        return err
    }
}

const CountryAndGender = async(country, gender) => {
    try{
        const datas = await PostData.findOne({Country: country, Gender: gender})
        console.log(datas)
        return datas
    } catch(err) {
        return err
    }
}

module.exports = {CountryData, CountryAndGender}