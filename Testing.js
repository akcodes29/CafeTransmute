var url = `https://xlate.spwphoto.com/translate`;

var xlatephrase = "transate this phrase";

async function xlate(phrase, target) {
  var xlated = "";

  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      q: `${phrase}`,
      source: "auto",
      target: `${target}`,
      format: "text",
      api_key: "",
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      xlated = data.translatedText;
    })

    .catch((error) => {
      alert("Error: " + error);
    });

  return xlated;
}

var cururl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`;

// function convert(usd) {
//   var usd = fetch(cururl)
//     .then((response) => response.json())
//     .then((info) => {
//       console.log(usd * info.eur.usd)
//     })
//     .catch((error) => {})
// }
var eurToUsdRate = ""
var convertedAmount =""



function convert(usd) {
  fetch(cururl)
    .then((response) => response.json())
    .then((info) => {
      eurToUsdRate = info.eur.usd; 
      convertedAmount = usd * eurToUsdRate;
      console.log(convertedAmount);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    })
  }

// fetch(cururl, {
//   mode: `no-cors`,
//   body: JSON.stringify()

// })
//   .then(response => response.json())
//   .then(data => {

//   });
