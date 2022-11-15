//Määritykset cons-muuttujalla
//Haetaan paragraphi ja nappi sekä tehdään url-muuttuja, johon sisällytetään itse linkki, josta se etsii vitsit
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

//Haemme ja saamme JSON-vastauksen. Tämä vastaus on JSON-objekti. Tarvitsemme vitsiavaimen tästä esineestä. Poimimme vitsiavaimen arvon ja näytämme sen p-elementissä.
let getJoke = () =>  {
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    	jokeContainer.textContent = `${item.joke}`;//Vitsiavain
      jokeContainer.classList.add("fade");
  });
}
//Napille toiminto
btn.addEventListener("click", getJoke);
getJoke();
