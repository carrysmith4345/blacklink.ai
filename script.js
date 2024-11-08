 <!DOCTYPE html> 
<html lang="en">
<head>
<title>tattoo generator</title>
</head>
<body>
<script>


function generateTattoo() {
  alert("Tattoo generation coming soon!");
}

// script.js

const canvas = document.getElementById('tattooCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
  drawing = true;
  draw(event); // Start drawing immediately
}

function stopDrawing() {
  drawing = false;
  ctx.beginPath(); // Reset the drawing path
}

function draw(event) {
  if (!drawing) return;

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';

  // Calculate the position within the canvas
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}
</script>
</body>
</html>
