function laskeKertoma()
{
  var kerrottuLuku = document.getElementById("kertoma").value;
  var laskettu = 1;
  for(var i = 1; i <= kerrottuLuku; i++)
  {
    laskettu*=i;
  }
  document.getElementById("v1").innerHTML = "Luvun" + " " + kerrottuLuku +" " +  "kertoma on" + " " + laskettu;
}
