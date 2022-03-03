let name = prompt("What's your name?");
let surname = prompt("What's your surname?");
let favouriteColor = prompt("What's your favourite color?");
//Chiediamo all'utente tre domande tramite prompt

let password = name + surname + favouriteColor + Math.floor((Math.random() * 100) + 1);
//Generiamo una password con cio' che ha inserito nelle tre domande e aggiungiamo un numero casuale da 1 a 100 alla fine

console.log(`${name}${surname}${favouriteColor}21`);
//print in console cio' che ha inviato in input l'utente + il numero 21 inserito da noi arbitrariamente

//oppure semplicemente printiamo in console
console.log(`${password}`);

document.getElementById('psw').innerText = `La tua password è: ${password}`; 
//aggiungiamo nel tag h1 contrassegnato con id: 'psw' la scritta sovrastante + la password ottenuta precedentemente dalla combinazione delle tre variabili + un numero casuale da 1 a 100





