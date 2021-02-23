'use strict';

let canvas = document.getElementById('BB');
let ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-40;
let dx = 2;
let dy = -2;
let ballRadius = 5;
let bar = 10;


function drawball(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2,false);
    ctx.fillstyle = "black";
    ctx.fill();
    ctx.closePath();
}
function drawbar(){
    ctx.beginPath();
    ctx.rect(canvas.width/2-25,canvas.height-30,50,15);
    ctx.fillstyle = "black";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawball();
    drawbar();
    if(y+dy>canvas.height-30 || y+dy <0){
        dy=-dy;
    }
    if(x+dx>canvas.width || x+dx < 0){
        dx=-dx;
    }
    x += dx;
    y += dy; 
}


setInterval(draw,10);

