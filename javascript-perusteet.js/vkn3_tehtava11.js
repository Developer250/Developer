function yksitoista()
{
  var a =  document.getElementById('p1').value;
  var b =  document.getElementById("p2").value;
  console.log(a + " " + b);
  var paril = 0;
  var parit = 0;
     if(a % 2 == 0)
     {
      for (let i = a; i <= b; i+=2)
      {
        console.log(paril);
        paril = paril + i;
      }
      for(let i = a+1; i<= b; i+=2)
      {
        parit += i;
      }
     }
     else
     {
       for (let i = a; i <= b; i+=2)
       {
        parit+= i;
      }
      for(let i = a+1; i<= b; i+=2)
      {
        paril += i;
      }
     }
      document.write("parilliset numerot niiden summa" + paril + "parittomat numerot  summa" + paril);
}
