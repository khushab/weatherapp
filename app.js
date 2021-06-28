const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const getLocation = () => {
  return process.argv[2];
};
const result = getLocation();
geoCode(result, (err, geoRes) => {
  if (!result) {
    return console.log("Please provide an address");
  }
  if (err) {
    return console.log(err);
  }
  forecast(geoRes.latitude, geoRes.longitude, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(geoRes.location);
    console.log("Temperature", res.main.temp + " C");
  });
});
