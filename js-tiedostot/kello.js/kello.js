const deg = 6;
const tunti = document.querySelector(".tunti")
const min = document.querySelector(".min")
const sek = document.querySelector(".min")

const setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = 'rotate'

};
