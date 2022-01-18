console.log('JS OK!')

const send = () => {
    btnSend.innerText = 'Annulla';

    const grid = document.getElementById('grid')
    grid.innerText = '';
}

const btnSend = document.getElementById('btn-send');
btnSend.addEventListener('click', send); {
    // Dichiaro quante siano le bombe
    const bombs = 16;
    // Raccogliamo il livello della tendina
    const option = document.getElementById('difficulty-choice');
    // Calcolare in base al livello scelto quante griglie far comparire
    let cells;
    let row;

    switch (option) {
        case 'medium':
            cells = 89;
            break;
        case 'hard':
            cells = 49;
            break;
        default:
            cells = 100;
    }

    row = Math.sqrt(cells);
    // Inserisco una variabile per contare i punti
    const maxPoint = cells - 

}