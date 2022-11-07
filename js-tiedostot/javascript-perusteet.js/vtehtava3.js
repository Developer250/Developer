function kuusi() {
  //Ensin tehtiin muuttujat i, h ja z sekä annettiin i.muuttujaan ahettiin html-dokumentsita v1 arvon sisältö eli sen minkä käyttäjä syöttää tekstikenttään//
  let i = 10;
  let h = 2;
  i = document.getElementById("v1").value;
  let z = i % h;
  //Seuraavaksi tarkastetaan onko z-muuttujan arvo epätosi verrattuna 0-lukuun.//
  if (z==0)
  {
    //Seuraavaksi haetaan html:n t1 kohdasta sen sisältö ja tulsotetaan "Luku on parillinen sekä lisätään i-muuttujan sisältö, joka näkyy selaimessa, kun käyttäjä antaa tekstikenttään numeron ja lähettää sen "lähetä" -napista"
    document.getElementById("t1").innerHTML = "Luku on parillinen " + i;
  }
  //Samaa tehdään alempanakin, mutta tulsotetaan "Luku on pariton selaimeen, kun käyttäjä syöttää tekstikenttään numeron ja lähettää sen "Lähetä" -napista
  else
  {
    document.getElementById("t1").innerHTML = "Luku on pariton " + i;
  }
}
