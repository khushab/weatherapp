const request = require("request");

const weatherKey = "cf82fc8df8426dcd53834e529fcdc7fe";

const forecast = (lat, long, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`;

    request({url: url, json: true}, (err, res) => {
        if(err){
            callback('Unable to connect', undefined);
        } else if (res.body.cod == 400){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, res.body)
        }
    })

};

module.exports = forecast;