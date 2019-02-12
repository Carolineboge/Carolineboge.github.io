console.log("skriptet er lastet");

//oppretter variabler som referer til databasen
const db = firebase.database();
const bloggere = db.ref("bloggere");

// Pushet en sting til databasen, firebase lager primørnøkkelen
bloggere.push("Sophie Elise");

//Pushet et objekt til database, firebase lager primærnøkkelen
bloggere.push({
  "navn":"Frøken Komiker",
  "folgere": 59000
});

//Lagde et objekt med egen primærnøkkel
const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"Peppa Gris",
  "folgere": 2000000
});



const storePappahjerte = bloggere.child("storePappahjerte");
storePappahjerte.set({
  "navn": "Kåre Kånradi",
  "folgere": 56
})

//Oppdaterer objektet pappahjerte med nytt navn
storePappahjerte.update({
  "navn":"Hans Olav Lahlum"
});
