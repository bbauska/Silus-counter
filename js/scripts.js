/* ./js/scripts.js in wip-silus-count of wip.bauska.org */
/* Dec 7-8, 2024 = 10,010 (6 hours approx)
   Dec 13-14, 2024 = 24,215 (10 hours approx)
   Dec 20-22, 2024 = 55,855 (16 hours approx)
   Jan 10-12, 2025 = 44,920 (21 hours approx) 
   Jan 17, 2025 = 36,000 (10 hours approx) 
   Jan 18, 19, 20, 2025 = 45350 (30 hours approx) 
   Jan 24, 2025 = 12150 (10 hours)
   Jan 25, 2025 = 32057 (10 hours) 
   Jan 31, 2025 = 8993 (4 hours) 
   Feb 1, 2025 = 42700 (10 hours) 
   Feb 2, 2025 = 7,900 (2 hours) */
let counter = 10010 + 24215 + 55855 + 44920 + 36000 + 45350 + 12150 + 32057 + 8993 + 42700 + 7900;
/* 10010 from Dec 7th-8th (6 hours - 1 day), 
   24215 from Dec 13-14 (10 hours - 1 day), 
   55855 from Dec 20, 21, 22 (16 hours - 2 days), 
   44920 from Jan 10-12, 2025 (6pm-4:50am), 
   45350 from Jan 17-20, 2025 (30 hrs approx) 
   12150 from Jan 24, 2025 (10 hrs) 
   32057 from Jan 25, 2025 (10 hrs) 
   8993 from Jan 31, 2025 (4 hrs) 
   42700 from Feb 1, 2025 (10 hours) 
   7,900 from Feb 2, 2025 (2 1/2 hours) all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
