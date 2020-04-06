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
    // console.log(citySearch);
    $("#search-input").val("");
    $("#weather-report").empty();

// Weather Ajax call with UV Index call inside
$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
      console.log(response);
      var cityName = response.name;
      // console.log(cityName)
      var weatherIcon = response.weather[0].icon;
      // console.log(weatherIcon);
      var description = response.weather[0].description;
      // console.log("DESCRIPTION" + description);
      var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
      // console.log(tempF);
      var humidity = response.main.humidity;
      // console.log(humidity);
      var windSpeed = response.wind.speed;
      // console.log(windSpeed);
      var lon = response.coord.lon;
      var lat = response.coord.lat;
      var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=6341109ff59e6a90d44174e154524871&lat=" 
      + lat + "&lon=" + lon;
      $.ajax({
        url: uvQueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
         var uvIndex = $("<button id='uv-index'>" + response.value + "</button>");
        
        // If statement for UV Index button color
        if (response.value < 2){
          $(uvIndex).addClass("green");
        } 
        else if (response.value >= 3 && response.value <= 5.99) {
          $(uvIndex).addClass("yellow");
        }
        else if (response.value > 5 && response.value <= 7.99) {
          $(uvIndex).addClass("orange");
        }
        else if (response.value > 8 && response.value <= 10) {
          $(uvIndex).addClass("red");
        } else {
          $(uvIndex).addClass("purple")};

    // Creating button for UV Index
      $(uvIndex).on("click", function(event){
       window.open("https://www.wikipedia.org/wiki/Ultraviolet_index")
      });
    
    // Creating weather report div elements
    var weatherReport = $("<div class='card blue-grey'>");
    var cityNameEl = $("<span class='card-title'>" + citySearch + " (Current weather) " + "</span>");
    var weatherIconEl = $("<img src=http://openweathermap.org/img/w/" + weatherIcon + ".png" + ">");
    var descriptionEl = $("<p>  " + description + "</p>");
    var tempEl = $("<p>Temperature: " + tempF + "°F" + "</p><br>");
    var humidityEl = $("<p> Humidity: " + humidity + "%" + "</p><br>");
    var windSpeedEl = $("<p> Wind Speed: " + windSpeed + " m/s" + "</p><br>");
    var uvIndexEl = $("<p> UV Index: </p>");
    var cardContentDiv = $("<div class='card-content white-text'>");

    // Appending them to the weather report div space

    weatherReport.append(cardContentDiv);
    cardContentDiv.append(cityNameEl);
    cardContentDiv.append(descriptionEl);
    cardContentDiv.append(weatherIconEl);
    cardContentDiv.append(tempEl);
    cardContentDiv.append(humidityEl);
    cardContentDiv.append(windSpeedEl);
    uvIndexEl.append(uvIndex);
    cardContentDiv.append(uvIndexEl);

    $("#weather-report").append(weatherReport);
 
      });
      // Creating div for saved search buttons to live
      var cityBtn = $("<a class='waves-effect waves-light btn-large deep-orange darken-3 city-Btn'>" + citySearch + "</a>");
      var savedSearch = $("<div class='saved-search'>");
      savedSearch.append(cityBtn);
      cityBtn.attr("data-name", citySearch)
      $(".sidebar").append(savedSearch);

  // If Ajax call fails, throw alert
  }).fail(function(response){
    alert("City not found. Please try again.");
  });

//   5 Day forecast Ajax call

$.ajax({
    url: forecastQueryURL,
    method: "GET"
}).then(function(response){
    // console.log(response);
});




// NEED TO SAVE TO LOCAL STORAGE

// Adding information to main body div




});

// ADD CLICK EVENT FOR SAVED SEARCHES




});

