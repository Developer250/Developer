function yksi()
{
// luetaan html-sivulta id:stä 1_1 arvo
// luetaan html-sivulta id:stä 1_2 arvo
// luetaan html-sivulta id:stä 1_3 arvo
  var ar0 = document.getElementById("1_1").value;
  var ar1 = document.getElementById("1_2").value;
  var ar2 = document.getElementById("1_3").value;
  var apu = 0;
  //Tehdään muuttuja nimeltään tulosta, jolle annetaan merkkijono Alkup. järjestys = " + ar0 + ", " + ar1 + ", " + ar2 + "<br> ja lopuksi laitetaan sinne väli//
  var tulosta = "Alkup. järjestys = " + ar0 + ", " + ar1 + ", " + ar2 + "<br>";
  //if-komennolla tarkastetaan, että onko muuttuja ar0 suurempi kuin muuttuja ar1 //
  //Seuraavaksi sijoitetaan muuttuja apu muuttujan ar0 arvo, jota tarvitsemme muuttamaan arvot päinvastaiseksi.
  //Sitten sijoitetaan muuttuja ar0:een arvo ar1:n arvo. Lopuksi sijoitetaan ar1:een apu-muuttujan ar1:n arvo. //
  if (ar0 > ar1) {
    apu = ar0;
    ar0 = ar1;
    ar1 = apu;
  }
  // Myäs alemmassa kohdassa (if-komennosta eteenpäin) tehdään samalla tavalla kuin edellisessä kohdassa, mutta tarkastetaan onko ar0 suurempi kuin ar2//
  if (ar0 > ar2) {
    apu = ar0;
    ar0 = ar2;
    ar2 = apu;
  }
  // Myös tässä kohdassa tehdään samalla tavalla if-komennosta teenpäin, mutta tarkastetaan onko ar1 suurempi kuin ar2 ja sijoitetaan arvot eli tarvittasessa//
  if (ar1 > ar2) {
    apu = ar1;
    ar1 = ar2;
    ar2 = apu;
  }
  //Tulosta muuttujaan lisätään järjestelty luettelo näkyville selaimeen, kun käyttäjä syöttää numeroita//
   tulosta += "Lopullinen järjestys = " + ar0 + ", " + ar1 + ", " + ar2;
   //Tässä tulostetaan tuloste muuttujaan tallennettu html-tiedosto//
  document.getElementById("tulosta").innerHTML = tulosta;
}


/*
function kaksi(){


  var t[0] = document.getElementById("1_1");
  var t[1] =  document.getElementById("1_2");
  var t[2] =  document.getElementById("1_3");
  var t[3] =  document.getElementById("1_4");
  var t[4] =  document.getElementById("1_5");
  var tulosta = "Annoit luvut" + t + "<br>";

}*/
