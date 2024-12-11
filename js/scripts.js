<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010;  /* from Dec 7th-8th */

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('clicker').onclick = count;
})
