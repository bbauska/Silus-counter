<!-- ./js/scripts.js in Silus-counter.bauska.org -->
let counter = 10100;  /* from Dec 7th/8th */

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('clicker').onclick = count;
	})
