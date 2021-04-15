/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.localStorage;

function onInput(){
    
    var notes = document.getElementById("textArea").value;
    localStorage.setItem("key", notes);
    
}

function clearText(){
    
    localStorage.setItem("key", "");
    document.getElementById("textArea").innerHTML = "";
  
}


function displayNotes(){
    
   var x = localStorage.getItem("key");
   document.getElementById("textArea").innerHTML = x;
   
}

document.addEventListener('DOMContentLoaded', displayNotes);