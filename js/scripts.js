<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010 + 24215 + 55855 + 44920 ;  /* from Dec 7th-8th (6 hours - 1 day), Dec 13-14 (10 hours - 1 day), Dec 20, 21, 22 (16 hours - 2 days), Jan 10-11, 2025 (6pm-4:50am) */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
