var http = require("http");
const url =
  "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02";

http
  .createServer(function(req, response) {
    var request = require("request");
    request(url, function(err, res, body) {
      const data = JSON.parse(body);
      response.write("<h1>" + data["name"] + "</h1>");
      var temperature = data.main["temp"] - 273.15;
      response.write("<h1>" + temperature + "</h1>");
      response.write("<h1>" + data.weather[2] + "</h1>");
    });
  })
  .listen(8080);