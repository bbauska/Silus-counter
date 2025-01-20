<!-- ./js/scripts.js in Silus-clicker.bauska.org -->
// Dec 7-8, 2024 = 10,010 (6 hours approx)
// Dec 13-14, 2024 = 24,215 (10 hours approx)
// Dec 20-22, 2024 = 55,855 (16 hours approx)
// Jan 10-12, 2025 = 44,920 (21 hours approx)
// Jan 17-20, 2025 = 45,350 (30 hours approx)
let counter = 10010 + 24215 + 55855 + 44920 + 36000 + 45350;  <!-- 10010 from Dec 7th-8th (6 hours - 1 day), 24215 from Dec 13-14 (10 hours - 1 day), 55855 from Dec 20, 21, 22 (16 hours - 2 days), 44920 from Jan 10-12, 2025 (6pm-4:50am), 45350 from Jan 17-20 all times are approximate. -->

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})


(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();
