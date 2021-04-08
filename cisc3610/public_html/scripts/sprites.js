/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sX = 0;
var sY = 0;
var imgWidth = 1280;
var imgHeight = 853;
var incrementX = 256;
var incrementY = 853/2;
var count = 0; 

var canvas = document.getElementById("sprite");
var context = canvas.getContext("2d");

window.onload = function() {
    
    drawImage();
    
//    setInterval(function(){
//    drawImage();}, 500);
    
}

function startCounting(){
 
   var id = setInterval(function(){
        drawImage();
    }, 500);
 
}

function drawImage(){

    
    if(count == 10){
     console.log("10");      
        

    context.clearRect(0,0,canvas.width,canvas.height);
    var numbers = document.getElementById("numbers");
    context.drawImage(numbers,256,0,256,426,0,0,256,426);
    context.drawImage(numbers,0,0,256,426,256,0,256,426);
        clearInterval(window.id);
    
    }else{
        
    context.clearRect(0,0,canvas.width,canvas.height);
    var numbers = document.getElementById("numbers");
    context.drawImage(numbers,sX,sY,256,426,0,0,256,426);
    sX = sX + incrementX;
    count++;
        
    }
    
    if( imgWidth/sX == 1){
        
        sY = sY + incrementY;
        sX = 0;
        
    }
    

    
  
}


