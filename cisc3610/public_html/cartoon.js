/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function moonAndStars(){
    
    var canvas = document.getElementById("mycanvas");
    
    var stars = canvas.getContext("2d");
    for(var i = 0; i < 100 ; i++){
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height/1.75;
    stars.beginPath();
    stars.arc(x,y,1.5,0,2 * Math.PI);
    stars.fillStyle = 'white';
    stars.fill();
    stars.stroke();
     }
    
    var moon = canvas.getContext("2d");
    moon.beginPath();
    moon.arc(25,25,150,0,2 * Math.PI);
    moon.fillStyle = '#FEFCD7';
    moon.fill();
    moon.stroke();
    
  
}

function boat(){
    
   var canvas = document.getElementById("mycanvas");
   
   var chimney = canvas.getContext("2d");
   chimney.beginPath();
   chimney.rect(canvas.width * 0.41, canvas.height * 0.68, -10, -80);
   chimney.stroke();
   chimney.fillStyle = '#cc8899';
   chimney.fill();
   

   var bh = canvas.getContext("2d");
   bh.beginPath();
   bh.rect(canvas.width * 0.42, canvas.height * 0.68, -110, -40);
   bh.stroke();
   bh.fillStyle = '#c0c0c0';
   bh.fill();
   
   
   var windowCount = 0;
   var dist = 10;
   var window = canvas.getContext("2d");
   while(windowCount < 2){
   window.beginPath();
   window.rect((canvas.width * 0.36) + dist, canvas.height * 0.66, -20,-20);
   window.stroke();
   window.fillStyle = 'yellow';
   window.fill();
   dist += 35;
   windowCount ++;
   }
   
   var boat = canvas.getContext("2d");
   boat.beginPath();
   boat.moveTo(canvas.width * 0.30, canvas.height * 0.78);
   boat.lineTo(canvas.width * 0.45, canvas.height * 0.78);
   boat.lineTo(canvas.width * 0.47, canvas.height * 0.68);
   boat.lineTo(canvas.width * 0.28, canvas.height * 0.68);
   boat.lineTo(canvas.width * 0.30, canvas.height * 0.78);
   boat.fillStyle = '#21130d';
   boat.stroke();
   boat.fill();
   
}


function createCanvas() {
    
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = '#032b5f';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    moonAndStars();
    boat();
    
    var water = canvas.getContext("2d");
    var yPos = canvas.height * 0.75;
    water.beginPath();
    water.rect(0,yPos,canvas.width,canvas.height * 0.25);
    water.fillStyle = '#1e81b0';
    water.fill();
      
  
 }

document.addEventListener('DOMContentLoaded', createCanvas);


