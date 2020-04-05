$(document).ready(function() {


// Event listener on search button

$("#searchBtn").on("click", function(event){
    event.preventDefault();
    var citySearch = $("#search-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + citySearch 
    + "&appid=6341109ff59e6a90d44174e154524871"
    var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="
    + citySearch 
    + "&appid=6341109ff59e6a90d44174e154524871" 
    console.log("Button click");
    console.log(citySearch);
    $("#search-input").val("");

// Weather Ajax call with UV Index call inside
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      var cityName = response.name;
      console.log(cityName)
      var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
      console.log(tempF);
      var humidity = response.main.humidity;
      console.log(humidity);
      var windSpeed = response.wind.speed;
      console.log(windSpeed);
      var lon = response.coord.lon;
      var lat = response.coord.lat;
      var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=6341109ff59e6a90d44174e154524871&lat=" 
      + lat + "&lon=" + lon;
      $.ajax({
        url: uvQueryURL,
        method: "GET"
      }).then(function(response) {
         var uvIndex = response.value;
         console.log("UV Index: " + uvIndex);   
      });
      
  });

//   5 Day forecast Ajax call

$.ajax({
    url: forecastQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});

// Creating div for saved search buttons to live
var savedSearch = $("<div class='saved-search'>");

var cityBtn = $("<a class='waves-effect waves-light btn-large deep-orange darken-3 city-Btn'>" + citySearch + "</a>");

savedSearch.append(cityBtn);

$(".sidebar").append(savedSearch);



});






});

