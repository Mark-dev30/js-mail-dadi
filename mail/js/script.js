/* PROBLEMA
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes! */

//1 - Chiedo all'utente la sua email.
    //1.1 - Creo una variabile "user_email" a cui assegno il valore inserito dall'utente tramite prombt.
    const user_email = prompt("Inserisci la tua email");

    //1.2 - Creo una lista "email" a cui assegno tutte l' email che possono accedere.
const email =["marco_annisi@gmail.com", "giorgio.pennuto@outlook.com", "myron86@hotmail.com", "adrienne.kovacek@ward.com", "marcofronterre@gmail.com", "loren89@gmail.com", "hilbert54@zemlak.info"];


    //1.3 - Creo una variabile "flag" a cui assegno il valore false.
let flag = false;

//2 - Controllo se l'email inserita dall'utente è presente nella lista.
    //2.1 - Creo un ciclo for per controllare se "user_email" è presente nella lista "email".
for (let i=0; i<email.length; i++){

    //2.2 - Se è presente assegno alla variabile "flag" il valore true.
    if (email[i] == user_email){
        flag = true;
    }
}

//3 - Stampo a schermo la risposta.
    //3.1 - Creo una condizione
        //3.1.1 - Se la variabile "flag" è uguale a true, mostro a shermo la scritta "La tua email risulta già registrata. Puoi accedere."
if (flag){
    console.log("La tua email risulta già registrata. Puoi accedere")
}

        //3.1.2 - Altrimenti mostro a schermo la scritta "Ci dispiace la tua email non risulta registrata. Riprova".

else{
    console.log("Ci dispiace la tua email non risulta registrata. Riprova")
}