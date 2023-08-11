$(`#citysubmit`).on('click', function() {

  var city = $(`#city`).val()
  $(`#map`).replaceWith(

<iframe id="map" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/search?key=AIzaSyD7RDg8X7uUVnvqkUwNzH0WpdBRlypx8v0&q=Coffee+shops+${city}+Europe"></iframe>

  )

});


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

//     <div id="currencyConverter">
//     <h2>Currency Converter</h2>
//     <input id="eur" type="text">
//     <input id="usd" type="text">
//     <button id="currencyCon">Convert</button>
// </div>


// <form>
//         <label for="city">Please enter the city you would like to search.</label>
//         <br>
//         <input type="search" id="city" name="city" size="20">
//         <br>
//         <input type="button" id="citysubmit" value="Submit">
//     </form>