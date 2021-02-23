'use strict';

let canvas = document.getElementById('BB');
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(230,470,50,15);
ctx.fillstyle = "rgb(0,0,0)";
ctx.fill();
ctx.closePath();