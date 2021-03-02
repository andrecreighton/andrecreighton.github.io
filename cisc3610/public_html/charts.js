/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function createGraph(){
    
    var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:5, color:"orange"},
        {name:"Banana", quantity:30, color:"yellow"},
        {name:"Kiwi", quantity:10, color:"green"},
        {name:"Blueberry", quantity:25, color:"blue"},
        {name:"Grape", quantity:3, color:"purple"}
        ];
        
    var width = 0;
    for(var i = 0; i < fruit.length; i ++){
    var canvas = document.getElementById("graph");
    var bar = canvas.getContext("2d");
    var cal = -1 * (10 * fruit[i].quantity);
    bar.beginPath();
    bar.rect(width,canvas.height,200,cal);
    bar.fillStyle = fruit[i].color;
    bar.fill();
    bar.font = "20px Arial";
    bar.fillStyle = "black";
    bar.fillText(fruit[i].name +": " + fruit[i].quantity,width,canvas.height);
    width = width + 200;   
    
    }

}
 
 
document.addEventListener('DOMContentLoaded', createGraph);