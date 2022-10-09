function nappi() {
    var n = document.getElementById("v1").value;
  var length = 5;
      charset = "Jani";
      tulosta = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      tulosta += charset.charAt(Math.floor(Math.random() * n));
      document.write(tulosta);

    }
  }
