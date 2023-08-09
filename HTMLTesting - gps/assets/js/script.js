
// Find initial location of user or set to EU general

var x = document.getElementById("demo");
var gpslat = ""
var gpslong = ""

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
gpslat = position.coords.latitude
gpslong = position.coords.longitude
}

$(`#map`).html(


   ` <iframe
    width="600"
    height="450"
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD7RDg8X7uUVnvqkUwNzH0WpdBRlypx8v0&q=coffee+near+Orlando"></iframe>`




// );