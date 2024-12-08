<!-- ./js/scripts.js in Silus-counter.bauska.org -->
<!-- Dec 7, 2024 = 10,100 & counting -->
let counter = 10100;

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('clicker').onclick = count;
	})
