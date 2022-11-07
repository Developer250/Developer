function kahdeksan() {
  //Ensin muodostettu kieli-muuttuja, jolle on annettu arvo html-documentin sisältä (h1 eli selectin sisällä olevat tiedot valuen sisälle asti)
  var kieli = document.getElementById("h1").value;
  //Sen jälkeen on vertailtu, että onko kieli-muuttujan arvo "Ruotsi", jos on niin tulostetaan "Hej Världen!", kun käyttäjä valitsee sen Ruotsi-kielen valikosta.//
  if (kieli == "Ruotsi") {
    document.getElementById("r1").innerHTML = "Hej världen!";
  }
  //Samalla tavalla tehtiin vertailu Englannin-kielelle, jotta saadaan tulostettua "Hello world"  selaimeen.//
  else if (kieli == "Englanti") {
      document.getElementById("r1").innerHTML = "Hello world!";
  }
  ///Samalla tavalla tehtiin vertailu Espanjann-kielelle, jotta saadaan tulostettua "Hola mundo"  selaimeen.//
  else if (kieli == "Espanja") {
      document.getElementById("r1").innerHTML = "Hola mundo!";
  }
}
