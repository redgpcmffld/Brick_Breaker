'use strict';

let canvas = document.getElementById('BB');
let ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-40;
let dx = 2;
let dy = -2;

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,5,0,90,false);
    ctx.fillstyle = "black";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    ctx.beginPath();
    ctx.rect(canvas.width/2-25,canvas.height-30,50,15);
    ctx.fillstyle = "rgb(0,0,0)";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw,10);
