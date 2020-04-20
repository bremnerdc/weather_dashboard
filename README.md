# weather_dashboard
* A simple weather dashboard using OpenWeather APIs and jQuery.
Deployed Application: https://grantnsmith.github.io/weather_dashboard/

## What it does
* The weather dashboard connects to the OpenWeather API and allows the user to search a city and get the current weather and the 5-day forecast. It saves recent searches in local storage so the user can easily search again.

## Technologies Used
* OpenWeather API, jQuery, Materialize CSS Framework, Moment.js, Google Fonts API

## How I built it
* I began with the HTML basic layout using Materialize CSS to help with the NavBar, search field and saved search buttons, and the divs/cards for the weather report and 5-day forecast

* Next I created the Ajax calls to the OpenWeather API. The first call gets the weather report with the UV index call (taking the long/lat from the main call) inside that call. The UV Index call includes if/else statements to add the correct color around the UV Index based off it's severity. The 5-day forecast call happens right aftet this.

* If the search comes from the main search field, it creates a "saved search button" while also calling the main weather query

* If the search comes from a "saved search button" then it does not create another saved search button, but run the main query off the data-name attribute of the button.

* When the page first loads, it asks for the users location. If the user allows it, it grabs their location, uses the long/lat to find the city name, then searches for that city name using the main weather query.

* After the location prompt and the local weather is pulled, the renderScreen function pulls from local storage to display the saved search buttons, including any "local weather" searches from past page loads.

* I used Moment.js to put the current date on the weather report and the future days onto the 5-day forecast.

## GIF of it in action
* Assets/weather_dashboard.gif

## Current bugs to fix and future features to add
* BUG - The initial "local weather" call takes a long time to load (sometimes ~5 seconds). Could create a separate Ajax call just for that (rather than calling for lat/long, grabbing city name, and calling again using the main query). I was trying to adhere to the DRY principle by using the main query and not adding an entirely new one for that initial page load, but I think it is slowing it down.

* BUG - When a user does the "local weather" on initial page load, it doesn't add a saved search button until the user refreshes the page again.

* FEATURE - Create functionality so that pressing "Enter" is equivalent to clicking search button

* FEATURE - Add high/low temperature for each day in the 5-day forecast









