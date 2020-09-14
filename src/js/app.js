const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

let paint = false;

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;
ctx.strokeStyle = '#2c2c2c';

function handleMousemove(e) {
  x = e.offsetX;
  y = e.offsetY;
  if (!paint) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPaint() {
  paint = true;
}

function handleMouseDown() {
  startPaint();
}

function stopPaint() {
  paint = false;
}

function handleMouseUp() {
  stopPaint();
}

function init() {
  canvas.addEventListener('mousemove', handleMousemove);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);
}

init();
