function taulukko()
{
  var numJono = [];
  numJono = [[4, 7, 10, 2], [88, 1, 99, 44], [47, 6, 7, 0], [52, 4, 28, 11], [60, 70, 100, 3]];
  var taulu = '<table border="1">';
  for(var j = 0; j < numJono.length; j++)
  {
    taulu += '<tr>';
    for(var h = 0; h < numJono[j].length; h++)
    {
      taulu += '<td>' + numJono[j][h] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('2').innerHTML = taulu;
}
