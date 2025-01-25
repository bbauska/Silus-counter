const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '🥩';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 3000);  /* wait 5 seconds, 5000 */
};

setInterval(() => {
  showConfetti();
}, 400);  /* 400 */
