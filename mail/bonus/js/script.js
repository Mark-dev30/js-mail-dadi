/* PROBLEMA
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes! */

//1 - Chiedo all'utente la sua email.
    //1.1 - Creo una variabile "user_email" a cui assegno il valore inserito dall'utente tramite prombt.
    /* const user_email = prompt("Inserisci la tua email"); */

    //1.2 - Creo una lista "email" a cui assegno tutte l' email che possono accedere.
const email =["marco_annisi@gmail.com", "giorgio.pennuto@outlook.com", "myron86@hotmail.com", "adrienne.kovacek@ward.com", "marcofronterre@gmail.com", "loren89@gmail.com", "hilbert54@zemlak.info"];
const btn_on = document.getElementById("btn-on");

btn_on.addEventListener('click', function(){
    let user_email = document.getElementById("email").value;
    let flag = false;

    for (let i=0; i<email.length; i++){

        if (email[i] == user_email){
            flag = true;
        }
    }
    
    if (flag){
        alert("La tua email risulta già registrata. Puoi accedere");
    }
    
    else{
        alert("Ci dispiace la tua email non risulta registrata. Riprova");
    }


})




