<!-- ./js/scripts.js in Silus-counter.bauska.org -->
// Load the Numeral.js library from a CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js">
</script>
let counter = 10100;

function count() {
  counter++;
  document.getElementById('number').innerHTML = counter;
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('clicker').onclick = count;
    // Format the number using the Numeral.js library
    var formattedNum = numeral(clicker).format("0,0.00");
  })
