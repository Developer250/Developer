function korttienArpominen()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //var maat vastaa nimikkeitä ['pata','risti','ruutu', 'hertta']
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskenta = 0;
  for(a = 0; a < maat.length; a++)
  {
    for(d = 0; d < numerot.length; d++)
    {
      if(a == maat.length-1 && d == numerot.length-1)
      {
        pakka[laskenta] = maat[a] + numerot[d];
      }
      else {
        pakka[laskenta] = maat[a]+numerot[d];
        laskenta++;
      }

    }
  }
  var kortit = [];
  for(k = 0; k < 5; k++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[k] = temp;
  }
  document.getElementById("tulosta").innerHTML = kortit;
}
