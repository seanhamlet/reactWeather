var axios = require('axios');

// create default query string
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8a0de23a431371d6426bc80c05e2d0b3&units=imperial';

// 

module.exports = {
  getTemp: function (location) {
    // encode location for url
    var encodedLocation = encodeURIComponent(location);
    // use template literals to easily combine strings, consts, and variables
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // axios uses promises
    // must use 'return' to return the promise so that 'then' can be called in 'Weather.jsx' as well
    //  in other words, we are 'chaining' our promises
    // 1st '.then', we are parsing out the information, looking for 'message' or 'temp'
    // 2nd '.then', we are
    return axios.get(requestUrl).then(function (res) {
      // openweathermap.org has special error messages
      // doesn't do 404 errors if it is passed incorrect city
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (error) {
      throw new Error(error.response.data.message);
    });
  }
}