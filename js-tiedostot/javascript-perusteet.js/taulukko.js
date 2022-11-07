function esimerkkiTaulukko()
{
  var autot = [];
  var caarat = ["Tesla", "VW i3", "Hyndai ionic"];
  autot.push("Jeep");
  document.write(caarat[1] + "caarat[] " +autot[0] + "<br />");
  document.write(caarat + "<br />");
  document.write(autot);
  var siirrettava = autot.pop();
  document.write("<br />siirrettava = " + siirrettava);
  document.write("<br />Caarat taulukko = " + caarat);
  autot.unshift(siirrettava);
  document.write("<br />Autot taulukko = " + autot);
  caarat.push(siirrettava);
  document.write("<br />Caarat taulukko = " + caarat + "<br />Autot taulukko = " + autot);

}
