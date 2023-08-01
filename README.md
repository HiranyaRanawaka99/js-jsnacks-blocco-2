# js-jsnacks-blocco-2

## TRACCIA
### JSnack1
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
### JSnack2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
### JSnack3
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
### JSnack4 (Bonus)
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

## SVOLGIMENTO

### JSnack1 
1. campo per inserire un numero in HTML
2. Mi seleziono gli elementi in JS 
3. Quando clicclo sul bottone --> condizione if 
    - se pari stampa numero 
    - se dipari stampa il numero successivo

### JSnack2
1. Dichiarare un array di nomi 
2. Dichiarare un array di cognomi
3. Chiedere all'utente quanti falsi invitati vorebbe generare con input
4. Al clicco del bottone, generare la lista degli invitati confome al numero inserito nell'input dall'utente

### JSnack3

1. Creo un array di numeri interi
2. Dichiaro una variabile con valore 0
3. Sommo tutti gli elementi in posizione dispari
4. Stampo nel dom


### JSnack4 (Bonus)

1. Creo due array: uno dei due avrà più elementi
3. Creo un array vuoto 
4. Se l'array X è più corto del array Y 
    - metto Y dentro l'array vuoto
    Altrimenti
    - metto y dentro array corto
3. Confronto le loro lunghezze per calcalore il numero degli elementi 
4. Per ogni elemento di differenza
    - chiedo all'utente un elemento
    - lo aggiungo all'array più corto