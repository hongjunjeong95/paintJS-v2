const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const boldRange = document.getElementById('jsRange');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;
const INITIAL_LINE_WIDTH = 2.5;

let paint = false;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = INITIAL_LINE_WIDTH;
ctx.strokeStyle = INITIAL_COLOR;

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

function handleClickColor(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleInputRange(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

if (canvas) {
  canvas.addEventListener('mousemove', handleMousemove);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);

  Array.from(colors).forEach((color) =>
    color.addEventListener('click', handleClickColor)
  );

  boldRange.addEventListener('input', handleInputRange);
}
