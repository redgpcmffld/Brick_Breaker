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
let offsetX, offsexY;
let brickRowcount = 4;
let brickColumnCount = 4;
let brickWidth = 50;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 25;
let brickOffsetLeft = 35;

let bricks = [];
for(let c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(let r=0; r<brickRowcount; r++){
        bricks[c][r] = {x:0, y:0};
    }
}

function drawBricks(){
    for(let c=0; c<brickColumnCount; c++){
        for(let r=0; r<brickRowcount; r++){
            let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle ="red";
            ctx.fill();
            ctx.closePath();
        }
    }
}
function reOffset(){
    let BB=canvas.getBoundingClientRect();
    offsetX=BB.left;
    offsetY=BB.top;
}

window.onscroll=function(e){reOffset();}
window.onresize=function(e){reOffset();}


let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

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
    ctx.fillStyle = "rgb(37, 179, 223)";
    ctx.fill();
    ctx.closePath();
}
function drawbar(){
    ctx.beginPath();
    ctx.rect(barX,barY,barWidth,barHeight);
    ctx.fillStyle = "rgb(37, 179, 223)";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBricks();
    drawball();
    drawbar();
    if(y+dy < ballRadius){
        dy=-dy;
    } else if(y + dy > ground){
        if(x > barX && x < barX + barWidth){
            dy = -dy;
            
        }
        else{
            // alert("GAME OVER");
            document.location.reload();
        }
    }
    if(x+dx>canvas.width-ballRadius || x+dx < ballRadius){
        dx=-dx;
    }
    x += dx;
    y += dy; 
}


setInterval(draw,10);

