var btn = document.getElementById("btn");
var ulostulo = document.getElementById("ulostuloteksti");

var numero = [Math.floor(Math.random() * 10)]

btn.addEventListener("click", function(){
  var input = document.getElementById('syota').Value;
  if (input == numero) {
    ulostulo.innerHTML = "Arvasit oikein!, Sinun numerosi oli $(numero)"
  }
  else if (input < numero) {
    ulostulo.innerHTML = "Arvasit liian alas!"
  };
  if (input > numero) {
      ulostulo.innerHTML = "Arvasit liian korkealle!"
  }
})
