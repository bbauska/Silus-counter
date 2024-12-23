import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

jsConfetti.addConfetti({
  emojis: ['🥩'],
  emojiSize: 100,
  confettiNumber: 30,
})

// ... 
jsConfetti.clearCanvas()

