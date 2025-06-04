let count = 0;
const counter = document.querySelector('.counter');
const banana = document.querySelector('.banana');

banana.addEventListener('animationiteration', () => {
  count++;
  counter.textContent = count;
});
