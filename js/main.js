function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBubble() {
  const container = document.getElementById('bubble-container');
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = random(10, 60);
  const left = random(0, 100);
  const duration = random(6, 12);
  const hue = random(180, 240);
  const opacity = random(0.1, 0.5);

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${left}%`;
  bubble.style.background = `hsla(${hue}, 100%, 85%, ${opacity})`;
  bubble.style.animationDuration = `${duration}s`;

  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

setInterval(() => {
  const delay = random(500, 2500);
  setTimeout(createBubble, delay);
}, 800);
