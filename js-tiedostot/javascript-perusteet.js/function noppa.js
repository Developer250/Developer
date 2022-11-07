function fors()
{
  var vast = ""
  for (i = 0; i < 5; i++)
  {
    vast += i+1 + ". for-kierros <br />";
    document.getElementById("vastaus").innerHTML = vast;
  }
}
function dos()
{
  var vast = ""
  var k = 10;
  do {
    vast += k+1 + ". do-while-kierros <br />";
    document.getElementById("vastaus").innerHTML = vast;
    k++;
  } while (k < 5);
}
  function noppa()

{
    var noppa = Math.random()*6;
    document.getElementById("vastaus").innerHTML = noppa;
}
