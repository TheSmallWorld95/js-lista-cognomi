// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’,
// 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare
// i metodi javascript che possono esserci utili.


// Chiedere all’utente il cognome
var cognome = prompt("Inserire il proprio cognome");
console.log(cognome);
// Creare un array contenente n cognomi
var listaCognomi = ["Scotillo", "Galasso", "Marzorati", "Filippini" , "Zannino"];

// Specifico che cognome deve essere una stringa e non un numero
if (isNaN(cognome)) {
  listaCognomi.push(cognome);
}

// Risoluzione con sort

// var listaCognomi = ["Scotillo", "Galasso", "Marzorati", "Filippini" , "Zannino"];
// listaCognomi.sort();
//
// console.log(listaCognomi);

// Metodo swapping

for (var j = 0; j < listaCognomi.length; j++) {
    for (var i = 0, swapping; i < listaCognomi.length; i++) {
      if (listaCognomi[i]> listaCognomi[i + 1]) {
        swapping = listaCognomi[i + 1];
        listaCognomi[i + 1] = listaCognomi[i];
        listaCognomi[i] = swapping;
        };
    };
};

console.log(listaCognomi);

// Stampo la posizione esatta della variabile cognome dopo aver ordinato
// alfabeticamente la lista

for(var i=0; i < listaCognomi.length; i++){
    if(listaCognomi[i] == cognome){
       console.log(i);
    }
}
