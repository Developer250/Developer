function scrabblePeli()
//Tehdään määritykset muuttujille
//Haetaan html-dokumentista inputin arvo (sanan, jonka käyttäjä syöttää)
{
  var pisteet = 0;
  var annettuSana = document.getElementById("v1").value;
  var h =  annettuSana + pisteet;
  //Tehdään toistettava rakenne
  for(var i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'o':
      case 'ÃƒÂ¤':
      case 'k':
      case 'l':
      case 'O':
      case 'Ãƒâ€ž':
      case 'K':
      case 'L':
        pisteet+=2;
        break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pisteet+=3;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pisteet+=4;
        break;
      case 'ÃƒÂ¶':
      case 'd':
      case 'Ãƒâ€“':
      case 'D':
        pisteet+=7;
        break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pisteet+=8;
        break;
      case 'c':
      case 'C':
        pisteet+=10;
        break;
      default:
        pisteet+=12;
    }
    //Tulostetaan web-sivustoon
    document.getElementById("r1").innerHTML = "Sanan " + annettuSana + " pisteet ovat: " + pisteet;
  }
}
