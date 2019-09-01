const yargs = require('yargs');

// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');
const axios = require('axios');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

 
    var encodedAddress = encodeURIComponent(argv.a);
    var url =  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get(url).then((res) => {
        console.log(res.data);
    })


