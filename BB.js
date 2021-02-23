'use strict';

let canvas = document.getElementById('BB');
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(230,470,50,15);
ctx.fillstyle = "rgb(0,0,0)";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(255,460,5,0,90,false);
ctx.fillstyle = "black";
ctx.fill();
ctx.closePath();
