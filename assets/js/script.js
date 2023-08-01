// SNACK 1
const numberInput = document.getElementById('number-input');
const btnSend = document.getElementById('btn-send');
const answer = document.getElementById('answer');
const answerOne = document.getElementById('answer-1');


btnSend.addEventListener('click', function () {
    let numberInputUser = numberInput.value;
    if (numberInputUser % 2 === 0) {
        answer.innerHTML = numberInputUser;
    } else {
        answer.innerHTML = ++numberInputUser;
    }
})

// SNACK 2
const guestList = document.getElementById('guest-list');
const guestInput = document.getElementById('guest-input');
const btnSendGuests = document.getElementById('btn-send-guests');

// Lista nomi
const names = ['chiara', 'mario', 'elisa', 'martina', 'roberto', 'mattia', 'carolina', 'sveva', 'luigi', 'tiziano'];

// Lista cognomi
const surnames = ['rossi', 'nani', 'muraro', 'balbo', 'conte', 'gatta', 'schiassi', 'remus', 'dirocco'];


// Quanti falsi invitati genero al clicco del bottone?
btnSendGuests.addEventListener('click', function () {
    const howManyGuests = guestInput.value;

    //Abbino nomi e cognomi in modo casuale 
    for (let i = 0; i < howManyGuests; i++) {

        const randomNamesIndex = Math.floor(Math.random() * names.length);
        const randomNames = names[randomNamesIndex];

        const randomSurnamesIndex = Math.floor(Math.random() * surnames.length);
        const randomSurnames = surnames[randomSurnamesIndex];

        //stampo nel DOM
        const listTitle = document.getElementById('list-title');
        listTitle.classList.remove('d-none');

        const fakeGuestList = document.createElement('li');
        fakeGuestList.innerHTML = `<li> ${randomNames} ${randomSurnames}</li>`;
        guestList.appendChild(fakeGuestList);
    }
})

// SNACK 3
const arrayNum = document.getElementById('array-num');
const oddSum = document.getElementById('odd-sum');

//Dichiaro l'array di numeri interi
const num = [5 + 1, 8, 56, 89, 2, 45, 65, 12, 6, 3, 2,]
arrayNum.innerHTML += num;

//Dichiaro una variabile con valore 0
let sum = 0;

//Per ogni indice dell'array
for (let i = 0; i < num.length; i++) {  
const currentNumber = num[i];

    //sommmo i numeri che hanno indice dispari
    if (i % 2 != 0) {
    sum += currentNumber;
    }
}

//Stampo la somma nel DOM
oddSum.innerHTML += sum;


// Snack 4
x


