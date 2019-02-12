//Vsriabler til databasen
const db = firebase.database();
const kontakter = db.ref("kontakter");

//Variabler som referer til HTML-elementene
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontaker = document.querySelector ("#secKontaker");
//document.querySelector("#secKontakter").innerHTML = "Hei hei";

//funksjoner eksempel
/*function f(x){
   secKontaker.innerHTML= x;
}

f("Hei hei hei");
*/

function registrerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpTelefon.value;
  const data = {
    "navn": inpNavn.value,
    "epost": inpEpost.value
  };
  const kontakt = kontaker.child(key);
  kontakt.set(data);
  skjema.reset();
};

skjema.addEventListener("submit", registrerKontakt);

function visKontakter (snapshot){
  const telefon = snapshot.key;
  const kontakt = snapshot.val();
  secKontakter.innerHTML += `
  <div> ${telefon}</div>
  <div> ${kontakt.navn}</div>
  <div>${kontakt.epost}</div>
  `;
}

kontakter.on ("child_added", visKontakter);
