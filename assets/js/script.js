var x = document.getElementById("demo");
var gpslat = ""
var gpslong = ""

window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
  // do nothing
  }
}

function showPosition(position) {
gpslat = position.coords.latitude
gpslong = position.coords.longitude

$(`#map`).replaceWith(

`<iframe id='map' class="container-fluid shadow p-3 mb-5 bg-body-tertiary rounded-5" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD7RDg8X7uUVnvqkUwNzH0WpdBRlypx8v0&q=Coffee+shops+near+me&center=${gpslat},${gpslong}&zoom=14">
    </iframe>`
  )

};

// Local Storage used to load map of the last searched city.
var savedCity = localStorage.getItem(0)

if (localStorage.getItem(0) !== null) {
  $(`#map`).replaceWith(

    `<iframe id='map' class="container-fluid shadow p-3 mb-5 bg-body-tertiary rounded-5" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD7RDg8X7uUVnvqkUwNzH0WpdBRlypx8v0&q=Coffee+shops+${savedCity}+Europe">
        </iframe>`
      )
  $('#city').val(savedCity)
}

// City search bar and map call.

$(`#citySubmit`).on('click', function() {

  var city = $(`#city`).val()
  localStorage.setItem(0, city)
  $(`#map`).replaceWith(

`<iframe id='map' class="container-fluid shadow p-3 mb-5 bg-body-tertiary rounded-5" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD7RDg8X7uUVnvqkUwNzH0WpdBRlypx8v0&q=Coffee+shops+${city}+Europe">
    </iframe>`
  )

});



// Currency Conversion API
// global variables
var cururl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`
var eurToUsdRate = ""
var convertedAmount =""
var usdbox = ""
var usdconv = ""

// function to currency api

async function convert(eur) {
  await fetch(cururl)
    .then((response) => response.json())
    .then((info) => {
      eurToUsdRate = info.eur.usd; 
      convertedAmount = eur * eurToUsdRate;
      console.log(convertedAmount);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    })
  }

// button click for cur convert 

  $(`#currencyCon`).on('click',async function() {
      eurbox = await $(`#eur`).val()
      usdconv = await convert(eurbox)
      $("#usd").val("$" + convertedAmount.toFixed(2))


  })



  // Translator

  var url = `https://xlate.spwphoto.com/translate`;
  var englishInput = ""
  var lang = ""
  var translateOutput = ""
  
$(document).ready(function() {
$('.dropdown-item').click(function() {
 var selectedItemID = $(this).attr('id');
 var selectedItemText = $(this).text()
 $('#selectLang').text(selectedItemText);
lang = selectedItemID
});
});

  $(`#translateButton`).on('click',async function() {
    englishInput= await $(`#englishInput`).val()
    await  xlate(englishInput,lang)
   $(`#translateOutput`).val(translateOutput)
  })



async function xlate(phrase, target) {
var xlated = ""
   await fetch(url, {
    method: "POST",
    retry: 5,
    body: JSON.stringify({
      q: `${phrase}`,
      source: "en",
      target: `${target}`,
      format: "text",
      api_key: "",
    }),
    headers: { "Content-Type": "application/json" },
  })
   .then((response) => response.json())
     .then((data) => {
      xlated =  data.translatedText;
      translateOutput = xlated
      console.log(xlated)
    })

    .catch((error) => {
      alert("Error: " + error);
    });


}


