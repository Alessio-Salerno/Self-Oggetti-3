/*  ESERCIZIO AULAB
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

Esempio:
Input: “i topi non avevano nipoti”
Output: true    javascript semplice
*/ 


// Inserire funzione

// function primaStringa(stringa){
//     // Rimuovere gli spazi unsando un metodo .replace
//     stringa = stringa.replace(/\W/g, "");
    
//     // Per dividere ogni singolo carattere usare il metodo .split
//     // Crearsi una variabile come contenitore
//     let reverse = stringa.split('').reverse().join('');
   

//     if(stringa ==  reverse){
//        return true;
//     }
//     else{
//         return false;
//     }

// }

// console.log(primaStringa('i topi non avevano nipoti'));

// ---------------- \\

// SELFWORK ARRAY 1

// let number = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];
// // ORDINE CRESCENTE a-b (DECRESCENTE= b - a)   
// let sorted = number.sort( ( a, b ) => b - a );
// console.log(number);

// // ----------- \\


// // OPPURE

// let numero = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// numero.sort(  (c, d ) => c -d );
// console.log(numero);



// SELFWORK ARRAY 2


// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//Input: a = [3, 5, 10, 2, 8]
//Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.


// let array = [3, 5, 10, 2, 8];

// let somma = array.reduce( (acc, val) => acc + val );
// console.log(`La somma dei numeri è ${somma}`);

// let media = somma / array.length;
// console.log(`la media dei numeri è ${media}`);


// let filter = array.filter(el => el < 8);
// console.log(`Valori minori di 8 = [${filter.join(',')}]`);

// // VALORI MAGGIORI DI 3,5,2

// let valoriMaggiori = array.filter(elemento => elemento > 5);
// console.log(`I valori maggiori di 5 = [${valoriMaggiori.join(',')}]`);

// // STAMPA I VALORI MINORI E MAGGIORI DELLA MEDIA

// let filter2 = array.filter(el => el <= media);
// console.log(`Valori minori della media = [${filter2.join(',')}]`);

// let valoriMaggiori2 = array.filter( elemento1 => elemento1 > media );
// console.log(`I valori maggiori della media = [${valoriMaggiori2.join(',')}]`);



//  ----------------------------------------------------- \\


// SELFWORK OGGETTI 1

/*
Crea un oggetto persona con le seguenti caratteristiche:
-nome
-cognome
-eta'
-un metodo che permetta di salutare;
*/


// let oggetto = {

//    nome: 'Alessio',
//    cognome: 'Salerno',
//    età: 24,
//    luogo: 'Palermo',

//    getSaluta: function(){
//     console.log(`Un saluto da ${this.nome} ${this.cognome}, ho ${this.età} anni e vengo da ${this.luogo}`);
//    }
   
// }

// console.log(oggetto);
// oggetto.getSaluta();



// ------------ \\



// SELFWORK OGGETTI 2

/*
Crea un oggetto agenda con una proprietà che comprenda 
una lista di contatti con un nome e un numero di telefono, 
ed abbia diverse funzionalità tra cui:

-mostrare tutti i contatti dell’agenda
-mostrare un singolo contatto
-eliminare un contatto dall’agenda
-aggiungere un nuovo contatto
-modificare un contatto esistente  

*/



let agenda = {
    'contatti': [
     {'nome': 'Nicola', 'telefono': 33333111},
     {'nome': 'Lorenzo', 'telefono': 333222555},
     {'nome': 'Paola', 'telefono': 3332211},
     {'nome': 'Jenny', 'telefono': 332244},
        

    ],
 
    //  CHIAMA UN CONTATTO
     
    'chiama': function(nome_chiamato){

      let contattoTrovato = this.contatti.find(contatto => contatto.nome == nome_chiamato);

        if
        (contattoTrovato){
            console.log(`Sto chiamando ${nome_chiamato}`);
        }
        else{
            console.log(`Impossibile perchè ${nome_chiamato} non è presente`);
        }
    },


    // MOSTRA TUTTI I CONTATTI

   'mostra Contatti': function(){
     agenda.contatti.forEach((contatto) => console.log(contatto));
   },
    
      
    // MOSTRA SIGNOLO CONTATTO

        find_name: function(trova_nome) {
            let contattoTrovato = this.contatti.find(contatto => contatto.nome === trova_nome);
    
            if (contattoTrovato) {
                let index = this.contatti.indexOf(contattoTrovato);
                console.log(`${trova_nome} è stato trovato all'indice ${index}`);
            } else {
                console.log(`Impossibile trovare ${trova_nome}`);
            }
        },
    



    // ELIMINARE UN CONTATTO
    
    rimuovi_contatto: function(nome_rimosso){
      
        let contattoTrovato = agenda.contatti.find(contatto => contatto.nome === nome_rimosso);

        if(contattoTrovato){
            let index = agenda.contatti.indexOf(contattoTrovato);
            console.log(`${nome_rimosso} è stato cancellato`);
            agenda.contatti.splice(index, 1);
        }
        else{
            console.log(`${nome_rimosso} non è presente in rubrica`);
        }
    },




    // AGGIUNGERE UN CONTATTO
    
  'aggiungi_contatto': function(nome_aggiunto, telefono_aggiunto) {
        let nuovoContatto = {'nome': nome_aggiunto, 'telefono': telefono_aggiunto};
        agenda.contatti.push(nuovoContatto);
    },



  
  // MODIFICA CONTATTO 
  
  modificaContatto: function(nome_modificato, vecchio_nome, nuovo_nome){
     let contattoModificato = agenda.contatti.find(contatto => contatto.nome == nome_modificato);

     if(contattoModificato){
        contattoModificato.nome = contattoModificato.nome.replace(vecchio_nome, nuovo_nome);
        console.log(`Il nome di ${nome_modificato} è stato aggiornato a ${contattoModificato.nome}  `);
     }else{
        console.log(`Impossibile trovare ${nome_modificato} in rubrica`);
     }
  }


}





// Function chiama
agenda.chiama('Nicola');
agenda.chiama('Lorenzo');

// Function mostra contatti
agenda["mostra Contatti"]();

// Function find name
agenda.find_name('Lorenzo');


// Function Elimina contatto
 agenda.rimuovi_contatto('Paola');


// Function aggiungi Nome
agenda.aggiungi_contatto('Matteo',  333555666);



// Function Modifica Contatto
agenda.modificaContatto('Lorenzo', 'Lorenzo', 'Alessio');


console.log(agenda);


// ---------------------------------------------------- \\


// SELFWORK OGGETTI 3 

let bowling = {
    players: [
        { name: 'Livio', scores: [] },
        { name: 'Paola', scores: [] },
        { name: 'Filippo', scores: [] },
        { name: 'Giuseppe', scores: [] }
    ],
    
    // Metodo per generare 10 punteggi casuali per ogni giocatore
    generateScores: function() {
        this.players.forEach(player => {
            for (let i = 0; i < 10; i++) {
                let randomScore = Math.floor(Math.random() * 10) + 1;
                player.scores.push(randomScore);
            }
        });
    },

    // Metodo per trovare il punteggio finale (somma dei punteggi) per ogni giocatore
    calculateFinalScores: function() {
        this.players.forEach(player => {
            player.finalScore = player.scores.reduce((acc, score) => acc + score, 0);
        });
    },

    // Metodo per aggiungere un nuovo giocatore e creare 10 punteggi casuali anche per lui
    addPlayer: function(name) {
        let newPlayer = { name: name, scores: [] };
        for (let i = 0; i < 10; i++) {
            let randomScore = Math.floor(Math.random() * 10) + 1;
            newPlayer.scores.push(randomScore);
        }
        this.players.push(newPlayer);
    },

    // Metodo per determinare il vincitore
    determineWinner: function() {
        this.calculateFinalScores(); // Assicurati che i punteggi finali siano aggiornati
        this.players.sort((a, b) => b.finalScore - a.finalScore);
        return this.players[0].name; // Restituisce il nome del vincitore
    }
};

// Esempio di utilizzo
bowling.generateScores();
console.log('Punteggi dei giocatori:', bowling.players);

bowling.addPlayer('Marco');
console.log('Punteggi dopo aver aggiunto Marco:', bowling.players);

let winner = bowling.determineWinner();
console.log('Il vincitore è:', winner);

    


