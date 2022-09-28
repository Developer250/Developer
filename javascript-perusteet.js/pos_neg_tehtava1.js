function pos_neg_tehtava1() {
var luku1;
luku1 = document.getElementById("1").value;

if (luku1 >= 0 ) {
  document.getElementById("r1").innerHTML = " luku on positiivinen";
}
else if (luku1 <= 0){
  document.getElementById("r1").innerHTML = " luku on negatiivinen";
}
}
