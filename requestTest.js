var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Imperatriz,br&appid=a1b3de34cb3e70cfcc791b096b2ff862', function (error, response, body) {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', body); // Print the HTML for the Google homepage.
  var parsedWeather = JSON.parse(body);
  console.log("Temperatura de Imperatriz: "+parsedWeather['main']['temp'])
});
