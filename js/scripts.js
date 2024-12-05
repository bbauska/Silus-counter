let counter = 0;

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
  };
  
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('clicker').onclick = count;
	});
