function day(val) {
  var day;
  switch (new Date(val).getDay();
  {
    case 1:
    day = "maanantai";
    break;
    case 2:
    day = "tiistai";
    break;
    case 3:
    day = "kesivkiikko";
    break;
    case 4:
      day = "torstai";
    break;
    case 5:
      day = "perjantai";
    break;
    case 6:
      day = "lauantai";
    break;
      break;
    default:
      day = "sunnuntai";
      break;
  }
  document.getElementById("day").innerHTML =  "tänään " + day;
  document.write("maanantai");


}
