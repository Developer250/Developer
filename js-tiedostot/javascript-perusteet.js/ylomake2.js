function tarkasta()
{
  var etunimi = document.getElementById("enimi").value;
  var sukunimi = document.getElementById("snimi").value;
  var koulu = document.getElementsById("kouluun")
  var koulu;
  for (var i = 0; i < koulu.length; i++)
  {
    if (koulu[i].checked)
    {
      kouluun = koulu[i].value;
    }
    document.getElementById("v2").innerHTML = kouluun;

  }

  function paivitys()
  {
    var select = document.getElementById("kielet");
    var option = select.options[select.selectedIndex]

    document.getElementById("value").value = option.value
    document.getElementById("text").value = option.text;
  }
