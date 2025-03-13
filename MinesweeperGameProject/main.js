import Minefield from './Classes/Minefield.js';
import RandomBombs from './Classes/RandomBombs.js';
import GridCounter from './Classes/GridCounter.js';
import MinefieldDomMethods from './Classes/MinefieldDomMethods.js';
import GridStyle from './Classes/GridStyle.js';

window.addEventListener('DOMContentLoaded', () => {

    // Definindo o DOM do grid.
    const minefieldDOM = document.querySelector('#minefield');

    // Definindo instâncias de classes.
    const mdm = new MinefieldDomMethods(minefieldDOM);
    const mine = new Minefield(mdm, 3, 5);
    const random = new RandomBombs(mine, 5, 'unity');
    const gridCounter = new GridCounter(mine);
    const gridStyle = new GridStyle(mdm);

    // Renderizando o grid.
    mine.setMinefieldStyle();
    mine.setMinefieldGrid();

    // Randomizando as bombas do grid.
    const arrNonRandomized = random.setNonRandomizedArr();
    const arrRandomized = random.setRandomizedArr(arrNonRandomized);
    random.mergeRandomBombs(arrRandomized);
    
    gridCounter.locateBombs();

    // Estilizando o grid.
    gridStyle.clickElement();
    gridStyle.rightClickElement();




    // Array.from(minefieldDOM.children).forEach(el => {
    //     console.log(el);
    //     if (parseInt(el.getAttribute('data-count')) > 0) {
    //         el.style = 'background-color: cyan';
    //     }
    //     if (el.getAttribute('data-type') == 'bomb') {
    //         el.style = 'background-color: red';
    //     }
    // })
    console.log(arrRandomized);
    console.log(minefieldDOM);
})