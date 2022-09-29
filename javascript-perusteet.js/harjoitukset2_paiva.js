function kaksi() {
  var viikonpaiva = parseInt(document.getElementById('vkp').value);
  console.log(viikonpaiva);
  switch (viikonpaiva) {
    case 1:
      document.getElementById('v2').innerHTML = "maanantai";
      break;
    case 2:
      document.getElementById('v2').innerHTML = "tiistai";
      break;
    case 3:
      document.getElementById('v2').innerHTML = "kesivkiikko";
      break;
    case 4:
        document.getElementById('v2').innerHTML = "torstai";
        break;
    case 5:
        document.getElementById('v2').innerHTML = "perjantai";
        break;
    case 6:
        document.getElementById('v2').innerHTML = "lauantai";
        break;
    default:
        document.getElementById('v2').innerHTML = "sunnuntai";
        break;
  }
}
