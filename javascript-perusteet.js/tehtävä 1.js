function yksi()
{
  var ar0 = document.getElementById("1_1");
  var ar1 = document.getElementById("1_2");
  var ar2 = document.getElementById("1_3");
  const t = [ar0, ar1, ar2];
  var apu = 0;
  var tulosta = "Alkup. järjestys = " + t + "<br>";
  for(var i = 0; i < 2; i++)
  {
    for(var x = i + 1; x < 4; i++)
      {
        if(t[i]>t[x])
        {
          apu = t[i];
          t[i] = t[x];
          t[x] = apu;
        }
      }
    }
  tulosta += "Lop. järjestys = " + t;
  alert(tulosta);
  document.getElementById("tulosta").innerHTML = tulosta;
}


/*
function kaksi(){


  var t[0] = document.getElementById("1_1");
  var t[1] =  document.getElementById("1_2");
  var t[2] =  document.getElementById("1_3");
  var t[3] =  document.getElementById("1_4");
  var t[4] =  document.getElementById("1_5");
  var tulosta = "Annoit luvut" + t + "<br>";

}*/
