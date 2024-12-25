<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
let counter = 10010 + 24215 + 55855;  /* from Dec 7th-8th (6 hours), Dec 13-14 (10 hours), Dec 20, 21, 22 (16 hours) */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
  let confettiCounter = count / 100
  if confettiCounter.isInteger  {
  showConfetti();
})

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}
