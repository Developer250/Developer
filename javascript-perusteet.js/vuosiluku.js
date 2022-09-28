function nappi() {
  //Ensin määritetään vuosilukumuuttuja, jotka ovat "vuosi1999" ja "vuosi2000S".//
  var vuosi1999, vuosi2000;
  //Luetaan käyttäjän syöte muuttujaan.//
  vuosi1999 = document.getElementById("4").value;
  vuosi2000 = document.getElementById("400").value;
  //Seuraavaksi haetaan buttonin id, joka on "nayta".//
    document.getElementById("nayta");
    //Seuraavaksi tarkastetaan onko muuttuja "vuosi1999 jaollinen 4:llä.//
    //jos on, niin tulostetaan "vuosi on karkausvuosi."//
  if (vuosi1999 / 4) {
    document.write("vuosi on karkausvuosi");
      }
   //Seuraavaksi tarkastetaan onko muuttuja "vuosi1999" ei ole jaollinen 100:lla.//
     //jos ei ole jaollinen 100:lla, niin tulostetaan "vuosi on karkausvuosi."//
  else if (vuosi1999 /! 100) {
    document.write("vuosi on karkausvuosi");
  }
  //Lopuksi tarkastetaan onko "vuosi2000" jaollinen 400:lla.//
  //Jos muuttuja "vuosi2000" on jaollinen, niin tulostetaan "vuosi on karkausvuosi, " ja vuosi ei ole karkausvuosi"
  if (vuosi2000 / 400 ) {
    document.write("vuosi on karkausvuosi, ");
    document.write("vuosi ei ole karkausvuosi");
  }
}
