export default class Minefield {

    constructor (mdm, rows, columns) {
        this.mdm = mdm;
        this.rows = rows;
        this.columns = columns;
    }

    setMinefieldStyle() {

        this.mdm.minefieldDOM.style = 
        `
        display:grid; 
        grid-template-columns: repeat(${this.columns}, 30px); 
        grid-auto-flow: rows;
        justify-items: center;
        justify-content: center;
        gap: 0;
        `;
    }

    setMinefieldGrid() {

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                let cell = document.createElement('div');

                cell.id = `_${row}-${col}`;
                cell.classList.add('cell-start-style', 'txtal-center', 'al-center');
                cell.setAttribute('data-type', 'blank');
                cell.setAttribute('data-count', '0');
                cell.setAttribute('data-nrow', `${row}`);
                cell.setAttribute('data-ncolumn', `${col}`);
                cell.innerHTML = '';

                this.mdm.minefieldDOM.appendChild(cell);
            }
        }
    }
}