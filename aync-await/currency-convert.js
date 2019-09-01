// USD , Rupee, 20 dollarsnpm ini
const axios = require('axios');
//http://data.fixer.io/api/latest?access_key=f38acc30a904baa1eaae0aeff5e1e082&format=1

// const getExchangeRate = (from,to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=f38acc30a904baa1eaae0aeff5e1e082&format=1').then((res) => {
//         const euro = 1/res.data.rates[from];
//         const rate = euro * res.data.rates[to];
//          return rate;
//     })
// }

const getExchangeRate = async (from,to) => {
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=f38acc30a904baa1eaae0aeff5e1e082&format=1');
        const euro = 1/res.data.rates[from];
        const rate = euro * res.data.rates[to];
         return rate;
    
}

const getCountries = async (currencyCode) => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return res.data.map((country) => country.name);

}

const convertCurrency = (from,to,amt) => {
    getExchangeRate(from,to).then()
}

getExchangeRate('USD','INR').then((rate) => {
    console.log(rate);
})

getCountries('INR').then(country => console.log(country));