function yksi()
// Määritetään muuttujat toka ja tulosta.
//Toka muuttujaan haetaan html-sivulta sen arvo, jonka käyttäjä syöttää.
{
  var toka = document.getElementById("3").value;
  var tulosta = "";
    //Sitten tehdään toistoa 10:oon asti. Määritetään i:n arvo ja verrataan onko i pienempi tai yhtäsuurin kuin maksimi arvo eli 10.
    //i:n arvoon lisätään käytännössä 2 + , jonka jälkeen tulosta-muuttujaan lisätään i:n arvo ja tehdään väli.
  for (var i = 2; i <= toka; i=i+2) {
    tulosta += i + " ";
  }
  //Lopuksi tulostetaan.
  document.getElementById("r1").innerHTML = tulosta;
}
