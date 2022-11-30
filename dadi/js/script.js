//1 - Genero un numero random per il computer.
    //1.1 - Creo una variabile "num_computer" a cui assegno un numero generato casualmente.
let num_computer = (1 + Math.random() * 6).toFixed(0);
console.log(`${"Numero Computer"} ${num_computer}`)
//2 - Genero un numero random per l'utente.
    //2.1 - Creo una variabile "num_user" a cui assegno un numero generato casualmente.
let num_user = (1 + Math.random() * 6).toFixed(0);
console.log(`${"Numero Utente"} ${num_user}`);

//3 - Mostro a schermo chi ha vinto.
    //3.1 - Creo una condizione.
        //3.1.1 - Se "num_computer" è maggiore di "num_user" mostro a schermo la scritta "Il tuo numero è minore. Hai perso!"
        if (num_computer > num_user){
            console.log("Il tuo numero è minore. Hai perso!")
        }
        //3.1.2 - Altrimenti Se "num_computer" è uguale a "num_user" mostro a schermo la scritta "Pareggio! I vostri numeri sono uguali".
        else if(num_computer == num_user){
            console.log("Pareggio! I vostri numeri sono uguali")
        }
        //3.1.3 - Altrimenti mostro a schermo la scritta "Complimenti! Il tuo numero è maggiore. Hai vinto!"
        else{
            console.log("Complimenti! Il tuo numero è maggiore. Hai vinto!")
        }
