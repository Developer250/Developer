function kaksi ()
  // Ensin tehdään muuttujat tulosta ja n. Tulosta muuttujaan lisätään merkkijono.
  // n-muuttujaan lisätään html-tiedostosta käyttäjän syöttämä arvo.
 {
  var tulosta="";
  var n = document.getElementById("v5").value;
  // Seuraavaksi tehdään silmukka. Silmukan avulla saadaan etsittyä käyttäjän syöttämästä arvosta sen arvo.
  // Lisätään tulosta-muuttujaan käyttäjän syöttämä arvo, johon lisätään aina yksi.
  // Lisätään myös "ö" merkkijono, jotta saadaan ö-kirjain aina joka toisen kirjaimen perään, kun käyttäjä syöttää nimen.
  for (var i = 0; i < n.length; i++) {
      tulosta += n[i] + "ö";
    }
    //Lopuksi tulostetaan käyttäjän syöttämä teksti.
    document.getElementById("r1").innerHTML = tulosta;
}
