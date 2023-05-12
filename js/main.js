
//Riferimento a elemento del DOM
const numRand = document.getElementById('numeriRandom');

// Visualizzare in pagina 5 numeri casuali.
const numGenerati = createArrRandNumOrd(100);
numRand.innerHTML += numGenerati;

// Timer 30 secondi
setTimeout(deleteInnerHtml, 2000);


// FUNZIONI
function createRandNumMinMax(newMin, newMax) {
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

function createArrRandNumOrd(max) {
    const numArr = [];

    while (numArr.length < 5) {
        const numRand = createRandNumMinMax(1, max);

        if(!numArr.includes(numRand)){
            numArr.push(numRand);
        }
    }

    return numArr;
}

function deleteInnerHtml(){
    numRand.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        let userNum = parent(prompt('Inserisci i numeri che ti ricordi uno per volta'));
        console.log(userNum);
    
        
        if (numGenerati.includes(userNum)) {
            console.log('Il tuo numero ' + userNum + 'è giusto');
        } else {
            console.log('Il tuo numero ' + userNum + 'è sbagliato');
        }
        
    }
}

