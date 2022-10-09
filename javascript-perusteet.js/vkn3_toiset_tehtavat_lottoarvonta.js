function lotto() {
  var taulukko = [];
  var temp;
  for (var i = 0; i < 7; i++) {
    temp = Math.floor(Math.random()*40+1);
    if (taulukko.includes(temp)) {
      i--;
    }
    else {
      taulukko[i] = temp;
    }
  }
  //Laitetaan taulukossa olevat numero oikeaan numeeriseen järjestykseen, joka tulee loopista taulukkoon
  taulukko.sort(function(a, b){return a-b});
  document.getElementById("r1").innerHTML =  taulukko;
}
