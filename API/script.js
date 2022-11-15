//Määritykset cons-muuttujalla
//Haetaan paragraphi ja nappi sekä tehdään url-muuttuja, johon sisällytetään itse linkki, josta se etsii vitsit
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () =>  {
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    //paragraphi.itse teksti sisällytetään itse vitsi
    	jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
  });
}
//Bapille toiminto
btn.addEventListener("click", getJoke);
getJoke();
