function yksi() {
  var teksti = "viikonpaiva";
  var t[1];
  var t[2];
  var t[3];
  var t[4];
  switch (new Date().getDay()) {
  case [1]:
    teksti = "maanantai";
      break;
  case 2:
    teksti = "tiistai";
      break;
  case 3:
    teksti = "kesivkiikko";
      break;
  case 4:
    teksti = "torstai";
      break;
  case 5:
    teksti = "perjantai";
      break;
  case 6:
    teksti = "lauantai";
      break;
  default:
    teksti = "sunnuntai";
      break;
  }
    document.getElementById("v1").innerHTML = teksti;
}
