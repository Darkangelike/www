"use strict";

/***************************************************
****************************************************
******************** VARIABLES *********************
****************************************************
****************************************************/

const apiKey = "252a60c1eee730a732d9cc8f6b59f6c9"



const JSONlist = {"coord":{"lon":2.3488,"lat":48.8534},
"weather":[{"id":741,
"main":"Fog",
"description":"brouillard",
"icon":"50d"}],
"base":"stations",
"main":{"temp":5.19,"feels_like":5.19,"temp_min":1.32,
"temp_max":7.88,"pressure":1025,"humidity":93},
"visibility":10000,"wind":{"speed":0.45,"deg":0,"gust":0.89},
"clouds":{"all":0},"dt":1636537324,
"sys":{"type":2,"id":2041230, "country":"FR",
"sunrise":1636527115,"sunset":1636561035},
"timezone":3600,"id":2988507,
"name":"Paris","cod":200}


/***************************************************
****************************************************
******************** FUNCTIONS *********************
****************************************************
****************************************************/

 /*************************************
 ****    FUNCTION GET WEATHER     *****
 **************************************/

 function getWeather() {
     let cityName = document.querySelector("#ville").value
     document.querySelector("#ville").value = "Paris"
     getJSON(JSONlist)
    //  callJSON(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${apiKey}`, getJSON)
 }

 
 /*************************************
 ******   FUNCTION CALL JSON    *******
 **************************************/

 function callJSON(url, functionCallback) {
     console.log("ok");
     fetch(url)
     .then(response => response.text())
     .then(datas => functionCallback(datas))
     .catch(error => alert("Error : " + error))
 }

 
//  /*************************************
//  ****      FUNCTION GET JSON      *****
//  **************************************/

//  function getJSON(JSONlist) {
//      document.querySelector("article").classList.remove("hide")
//      document.querySelector("article h2 strong").insertAdjacentHTML("beforeend", `${document.querySelector("#ville").value}`)
//      document.querySelector("article h2 sup").innerHTML = `${JSONlist.country}`

//      document.querySelector("article p strong").insertAdjacentHTML("beforeend", `${JSONlist.main.temp}`)


//  }

 /*************************************
 ****      FUNCTION GET JSON      *****
 **************************************/

 function getJSON(JSONlist) {
     document.querySelector("article").classList.remove("hide")
     document.querySelector("article h2 strong").insertAdjacentHTML("beforeend", `${document.querySelector("#ville").value}`);
     document.querySelector("article h2 sup").innerHTML = `${JSONlist.sys.country}`

     document.querySelector("article p strong").insertAdjacentHTML("beforeend", `${JSONlist.main.temp}`)
    document.querySelector("article div img").src=`img/${JSONlist.weather[0].icon}.png`
    document.querySelector("article div small").innerHTML = `${JSONlist.weather[0].description}`
 }

 /*************************************
 ****       FUNCTION SEARCH       *****
 **************************************/

function search(tobeFind, list) {
    list.forEach(item => {

    })
}

 document.addEventListener("DOMContentLoaded", function() {
     
     
/***************************************************
****************************************************
********************** CODE ************************
****************************************************
****************************************************/



/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/

document.querySelector("#submit").addEventListener("click", getWeather)

 })

