function seitseman() {
  var u = document.getElementById('v2').value;

  if (u < 15) {
    document.getElementById("r1").innerHTML = "Saa ajaa polkupyörää " ;
  }
  else if (u >= 15 && u < 18) {
    document.getElementById("r1").innerHTML = " Saa ajaa mopoa";
  }
  else {
      document.getElementById("r1").innerHTML = "Saa ajaa autoa";
  }
}
