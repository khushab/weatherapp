const request = require('request');

const mapBoxKey ="pk.eyJ1Ijoia2h1c2hhYiIsImEiOiJja3B6ODYwdHkwZXJ5MnZycm80ZmNsYzViIn0.KKgPM6ahv6ZhYPxJ7oEffA";

const geoCode = (city, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapBoxKey}&limit=1`;
  
    request({url: url,json: true},(err, res) => {
      if(err){
        callback('Unabe to connect...', undefined)
      } else if(res.body.features.length == 0){
        callback('Unable to find location..', undefined)
      } else{
        callback(undefined, {
          latitude: res.body.features[0].center[0],
          longitude: res.body.features[0].center[1],
          location: res.body.features[0].place_name,
        })
      }
    })
  
}

module.exports = geoCode