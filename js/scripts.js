<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010 + 24215;  /* from Dec 7th-8th (6 hours) & Dec 13-14 (10 hours) */

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('clicker').onclick = count;
})
