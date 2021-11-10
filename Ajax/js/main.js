"use strict";

/***************************************************
****************************************************
******************** VARIABLES *********************
****************************************************
****************************************************/

const target = document.querySelector("#target")

/***************************************************
****************************************************
******************** FUNCTIONS *********************
****************************************************
****************************************************/

 /*************************************
 ****  FUNCTION ON CLICK EXECUTE  *****
 **************************************/

 function onClickExecute() {
     let valuebtn = parseInt(document.querySelector("input:checked").value)

     switch (valuebtn) {
         case 1:
         ajaxCallHTML("php/1-get-html-article.php", ajaxGetHTML)        
         break;

         case 2:
         ajaxCallHTML("php/2-get-json-data.php", ajaxGetJSON)        
         break;

         case 3:
         ajaxCallHTML("php/3-get-html-movies.php", ajaxGetHTML)        
         break;

         case 4:
         ajaxCallHTML("php/4-get-json-movies.php", ajaxGetJSON2)        
         break;
     }
 }
 
 /*************************************
 ****   FUNCTION AJAX CALL HTML   *****
 **************************************/

 function ajaxCallHTML (url, functionCallback) {
     fetch(url)
     .then(response => response.text())
     .then(datas => functionCallback(datas))
     .catch(error => alert("Erreur : " + error));
 }

 /*************************************
 ****   FUNCTION AJAX CALL JSON   *****
 **************************************/

 function ajaxCallJSON (url, functionCallback) {
     fetch(url)
     .then(response => response.JSON())
     .then(datas => functionCallback(datas))
     .catch(error => alert("Erreur : " + error));
 }
 
 /*************************************
 ****   FUNCTION AJAX GET HTML    *****
 **************************************/

 function ajaxGetHTML(html) {
     target.innerHTML = html;
 }

 /*************************************
 ****   FUNCTION AJAX GET JSON    *****
 **************************************/

function ajaxGetJSON(JSONlist) {
    let html = "<ul>";
    let list = JSON.parse(JSONlist)
    list.forEach(item => {
        html += `<li><b>First name :</b> ${item.firstName}</li><br>
        <li><i>Téléphone : </i>${item.phone}</li><br>`
    })

    html += "</ul>"
    target.innerHTML = html;
}

 /*************************************
 ****   FUNCTION AJAX GET JSON2   *****
 **************************************/


function ajaxGetJSON2(JSONlist) {
    let html = `<ul class="movie-list">`;
    let list = JSON.parse(JSONlist)
    list.forEach(item => {
        html += `<li><img src="images/${item.cover}">
        <p><b>${item.title}</b> - <i>${item.duration}</i></p></li>`
    })

    html += "</ul>"
    target.innerHTML = html;
}

/***************************************************
****************************************************
********************** CODE ************************
****************************************************
****************************************************/

document.addEventListener("DOMContentLoaded", function() {

/***************************************************
****************************************************
********************** EVENTS **********************
****************************************************
****************************************************/

    document.querySelector("#run").addEventListener("click", onClickExecute)
})