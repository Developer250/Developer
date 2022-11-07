function henkilo() {
  {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);
      let paiva = data.results[0].dob.date;
      document.getElementById('tietoa1').innerHTML = "<b>Nimi: </b>" + data.results[0].name.first + " " + data.results[0].name.last
      + "<br><b >Osoite: </b>" + data.results[0].location.street.number
      + "<br>" + data.results[0].location.city + " " + data.results[0].location.street
      + "<br>" + data.results[0].location.postcode + " " + data.results[0].location.postcode
    document.getElementById('puh').innerHTML= "<br><b>Puhelin: </b>" + data.results[0].phone
      + "<br><b>Maa: </b>" + data.results[0].location.country
      + "<br><b>Käyttäjätunnus + salasana: </b>" + data.results[0].login.username + " "+ "password: " + data.results[0].login.password
      document.getElementById('syntymäaika').innerHTML = "<br><b>Syntymäaika: </b>" + paiva;
      document.getElementById('sposti').innerHTML =  "<br><b>Sähköposti: </b>" +  data.results[0].email
      document.getElementById("kuva").src = data.results[0].picture.large
      document.getElementById("kuva").style = '300px';
    } );
  }
}
function koira() {
  {

    fetch("https://dog.ceo/api/breeds/image/random.jpg")
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      let picture = data.results
      document.getElementById("doge").innerHTML= data.dog + "<br>" + data.dog;
      document.getElementById("kuva1").src = data.results
      document.getElementById("kuva1").style = '300px';
    } );
  }
}
