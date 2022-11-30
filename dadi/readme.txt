PROBLEMA
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

RISOLVO
1 - Genero un numero random per il computer.
    1.1 - Creo una variabile "num_computer" a cui assegno un numero generato casualmente.
2 - Genero un numero random per l'utente.
    2.1 - Creo una variabile "num_user" a cui assegno un numero generato casualmente.  
3 - Mostro a schermo chi ha vinto.
    3.1 - Creo una condizione.
        3.1.1 - Se "num_computer" è maggiore di "num_user" mostro a schermo la scritta "Il tuo numero è minore. Hai perso!"
        3.1.2 - Altrimenti Se "num_computer" è uguale a "num_user" mostro a schermo la scritta "Pareggio! I vostri numeri sono uguali".
        3.1.3 - Altrimenti mostro a schermo la scritta "Complimenti! Il tuo numero è maggiore. Hai vinto!"