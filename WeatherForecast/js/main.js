"use strict";

/***************************************************
****************************************************
******************** VARIABLES *********************
****************************************************
****************************************************/

const apiKey = "252a60c1eee730a732d9cc8f6b59f6c9"

/***************************************************
****************************************************
******************** FUNCTIONS *********************
****************************************************
****************************************************/

 /*************************************
 ****       FUNCTION SEARCH       *****
 **************************************/

 function search() {
     let cityName = $("#ville").val()
     if (isEmpty(cityName, "Cannot be empty") == false ) { 
        callJSON(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`, getJSON)
     }
 }

 /*************************************
 ******   FUNCTION CALL JSON    *******
 **************************************/

 function callJSON(url, functionCallback) {
     fetch(url)
     .then(response => response.json())
     .then(datas => functionCallback(datas))
     .catch(error => alert("Error : " + error))
 }

 /*************************************
 ****      FUNCTION GET JSON      *****
 **************************************/

 function getJSON(JSONlist) {
     console.log(JSONlist);
     $("article").removeClass("hide")
     $("article h2 strong").text(`${JSONlist.name}`);
     $("article h2 sup").text(`${JSONlist.sys.country}`)

     $("article p strong").text(`${Math.floor(JSONlist.main.temp)}`)
    $("article div img").attr("src",`img/${JSONlist.weather[0].icon}.png`)
    $("article div small").text(`${JSONlist.weather[0].description}`)
 }

 /*************************************
 ****      FUNCTION IS EMPTY      *****
 **************************************/

 function isEmpty(string, message) {
     let empty = false;
    let count = string.trim()
    if (count == 0) {
        empty = true
        alert(message)
    }
     return empty
 }

/***************************************************
****************************************************
********************** CODE ************************
****************************************************
****************************************************/

 $(document).ready(function() {

/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/

$("#submit").on("click", search)

 })