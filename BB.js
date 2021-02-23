'use strict';

let canvas = document.getElementById('BB');
let ctx = canvas.getContext("2d");
let cw = canvas.width;
let ch = canvas.height;
let x = canvas.width/2;
let y = canvas.height-40;
let dx = 2;
let dy = -2;
let ballRadius = 5;
let barHeight = 10;
let barWidth = 50;
let barX = (canvas.width-barWidth)/2;
let barY = canvas.height-barHeight-10;
let ground = canvas.height-ballRadius-barHeight-10;
let screenLog = document.querySelector('#screen-log');
document.addEventListener('mouseclick', logKey);

function logKey(e) {
    screenLog.innerText = `
      Screen X/Y: ${e.screenX}, ${e.screenY}
      Client X/Y: ${e.clientX}, ${e.clientY}`;
  }
  function checkClickMap(e) {
    if (e.screenX < 50) doRedButton();
    if (50 <= e.screenX && e.screenX < 100) doYellowButton();
    if (e.screenX >= 100) doRedButton();
  }
console.log(screenY);
console.log("Hello world")
function drawball(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2,false);
    ctx.fillstyle = "black";
    ctx.fill();
    ctx.closePath();
}
function drawbar(){
    ctx.beginPath();
    ctx.rect(screenX,screenY,barWidth,barHeight);
    ctx.fillstyle = "blue";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawball();
    drawbar();
    if(y+dy>ground || y+dy < ballRadius){
        dy=-dy;
    }
    if(x+dx>canvas.width-ballRadius || x+dx < ballRadius){
        dx=-dx;
    }
    x += dx;
    y += dy; 
}


setInterval(draw,10);

