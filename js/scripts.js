<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
// Dec 7-8, 2024 = 10,010 (6 hours approx)
// Dec 13-14, 2024 = 24,215 (10 hours approx)
// Dec 20-22, 2024 = 55,855 (16 hours approx)
// Jan 10-12, 2025 = 44,920 (21 hours approx)
let counter = 10010 + 24215 + 55855 + 44920 + 36000 ;  <!-- 10010 from Dec 7th-8th (6 hours - 1 day), 24215 from Dec 13-14 (10 hours - 1 day), 55855 from Dec 20, 21, 22 (16 hours - 2 days), 44920 from Jan 10-12, 2025 (6pm-4:50am) all times are approximate. -->

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
