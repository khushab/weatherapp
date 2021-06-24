const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

geoCode("Delhi", (error, response) => {
  // console.log('Error', error);
  console.log("Data", response);
});

forecast(72, 12, (error, response) => {
  // console.log("error",error )
  console.log("Data Forecast", response.main.temp);
});
