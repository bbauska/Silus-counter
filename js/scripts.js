<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010 + 24215 + 55855;  /* from Dec 7th-8th (6 hours), Dec 13-14 (10 hours), Dec 20, 21, 22 (16 hours) */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})

import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()

jsConfetti.addConfetti({
   emojis: ['🥩', '⚡️', '💥', '✨'],
})

jsConfetti.addConfetti({
  confettiRadius: 6,
  confettiNumber: 500,
})

jsConfetti.addConfetti({
  emojis: ['🦄'],
  emojiSize: 100,
  confettiNumber: 30,
})

// ... 
jsConfetti.clearCanvas()
🥩
