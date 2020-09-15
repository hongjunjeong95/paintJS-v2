const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const boldRange = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;
const INITIAL_LINE_WIDTH = 2.5;

let painting = false;
let filling = false;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineWidth = INITIAL_LINE_WIDTH;
ctx.strokeStyle = INITIAL_COLOR;

function handleMousemove(e) {
  x = e.offsetX;
  y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPaint() {
  painting = true;
}

function handleMouseDown() {
  startPaint();
}

function stopPaint() {
  painting = false;
}

function handleMouseUp() {
  stopPaint();
}

function handleClickColor(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleInputRange(e) {
  const size = e.target.value;
  ctx.lineWidth = size;
}

function handleClickFill() {
  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleClickMode(e) {
  if (!filling) {
    mode.innerHTML = 'Paint';
    filling = true;
  } else {
    mode.innerHTML = 'Fill';
    filling = false;
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', handleMousemove);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('click', handleClickFill);

  Array.from(colors).forEach((color) =>
    color.addEventListener('click', handleClickColor)
  );

  boldRange.addEventListener('input', handleInputRange);
  mode.addEventListener('click', handleClickMode);
}
