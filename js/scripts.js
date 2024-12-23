<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010 + 24215 + 55855;  /* from Dec 7th-8th (6 hours), Dec 13-14 (10 hours), Dec 20, 21, 22 (16 hours) */

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})

function separateNumber() { 
  givenNumber = counter;
     
  output = givenNumber.toLocaleString('en-US'); 
     
  document.querySelector('.output').textContent = output; 
     
}
