PROBLEMA
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  Non utilizzare le funzioni indexOf o includes!

RISOLVO

1 - Chiedo all'utente la sua email.
    1.1 - Creo una variabile "user_email" a cui assegno il valore inserito dall'utente tramite prombt.
    1.2 - Creo una lista "email" a cui assegno tutte l' email che possono accedere.
    1.3 - Creo una variabile "flag" a cui assegno il valore false.
2 - Controllo se l'email inserita dall'utente è presente nella lista.
    2.1 - Creo un ciclo for per controllare se "user_email" è presente nella lista "email".
    2.2 - Se è presente assegno alla variabile "flag" il valore true.
3 - Stampo a schermo la risposta.
    3.1 - Creo una condizione
        3.1.1 - Se la variabile "flag" è uguale a true, mostro a shermo la scritta "La tua email risulta già registrata. Puoi accedere."
        3.1.2 - Altrimenti mostro a schermo la scritta "Ci dispiace la tua email non risulta registrata. Riprova".
