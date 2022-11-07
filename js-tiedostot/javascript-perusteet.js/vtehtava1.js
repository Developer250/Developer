function nelja() {
  var luku1, luku2, luku3;
 luku1 = document.getElementById("12").value;
 luku2 = document.getElementById("13").value;
 luku3 = document.getElementById("14").value;
 if (luku1 < luku2 && luku1 < luku3)
 {
  if (luku1 < luku2)

 }
 else if (luku2 < luku1 && luku2 < luku3)
 {
   if (luku1 < luku2)
   document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku3 + " " + luku1 + " " + luku2;
 }
 else if(luku2 < luku1)
   {
      document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku3 + " " + luku2 + " " + luku1;
     }

 if (luku3 < luku2) {
   document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku1 + " " + luku2 " " + luku3;
 }
 else if{
   document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku2 + " " + luku1 " " + luku3;
 }

   if {
     (luku3 < luku1)
       document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku1 + " " + luku2 " " + luku3;
   }
   else {
     document.getElementById("t1").innerHTML = "Luvut järjestyksessä" + luku3 + " " + luku2 " " + luku1;
     }
   console.log(luku1, luku2, luku3);
}
