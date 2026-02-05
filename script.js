// QUIZ FUNCTION
function answer(choice) {
  const feedback = document.getElementById('quiz-feedback');
  if (choice === 'right') {
    feedback.textContent = '✅ Correct! Always check directly on the official website.';
    feedback.style.color = 'black';
  } else {
    feedback.textContent = '❌ Wrong! Never click on suspicious links.';
    feedback.style.color = 'red';
  }
}

// MATRIX BACKGROUND
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);


