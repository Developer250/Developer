function viisi() {
  var luku1, luku2, luku3, luku4, luku5;
 luku1 = document.getElementById("12").value;
 luku2 = document.getElementById("13").value;
 luku3 = document.getElementById("14").value;
 luku4 = document.getElementById("15").value;
 luku5 = document.getElementById("16").value;
 if (luku1 > luku2 && luku1 > luku3 && luku1 > luku4 && luku1 > luku5)
 {
 document.getElementById("t1").innerHTML = "Annoit luvut" + luku5 + " " + luku4 + " " +  + luku3 + " " + luku2 + " " + luku1;
 document.getElementById("t1").innerHTML = "Suurin niistä on" + luku1;
 }
 else if (luku2 > luku3 && luku2 > luku4 && luku2 > luku5)
 {
 document.getElementById("t1").innerHTML = "Annoit luvut" + " " + luku5 + " " + luku4 + " " + luku3 +" " + luku2 + " " + luku1;
 document.getElementById("t1").innerHTML = "Suurin niistä on" + luku2;

 }
  else if (luku3 > luku4 && luku3 > luku5)
   {
   document.getElementById("t1").innerHTML = "Annoit luvut" + " " + luku5 + " " + luku4 + " " + luku3 +" " + luku2 + " " + luku1;
   document.getElementById("t1").innerHTML = "Suurin niistä on" + luku3;
 }
 else if (luku4 > luku5) {
   document.getElementById("t1").innerHTML = "Annoit luvut" + " " + luku5 + " " + luku4 + " " + luku3 +" " + luku2 + " " + luku1;
   document.getElementById("t1").innerHTML = "Suurin niistä on" + luku4;
 }
 else if (luku5 > luku4)
 document.getElementById("t1").innerHTML = "Annoit luvut"
 document.getElementById("t1").innerHTML = "Suurin niistä on" + luku5;
 console.log(luku5);

}
