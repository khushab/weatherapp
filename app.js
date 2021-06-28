const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const getLocation = () => {
  return process.argv[2];
};
const result = getLocation();
geoCode(result, (err, { latitude, longitude, location }) => {
  if (!result) {
    return console.log("Please provide an address");
  }
  if (err) {
    return console.log(err);
  }
  forecast(latitude, longitude, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(location);
    console.log("Temperature", res.main.temp + " C");
  });
});
