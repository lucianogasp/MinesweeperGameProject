export default class GridCounter {

    constructor (minefield) {
        this.minefield = minefield;
    }

    locateBombs() {

        this.minefield.mdm.minefieldDomElementsForEach( element => {

            if (element.getAttribute('data-type') == 'bomb') {
                this.performGridIteration(element);
            }
        })
    }

    // Executa o deslocamento do seletor para os elementos adjacentes do elemento bomba.
    performGridIteration(element) {
        
        const nRow = parseInt(element.getAttribute('data-nrow'));
        const nColumn = parseInt(element.getAttribute('data-ncolumn'));

        const arrPerform = [-1, 0, 1];

        for (let rowIterator of arrPerform) {
            for (let colIterator of arrPerform) {

                // Seleção das linhas e colunas adjacentes ao elemento bomba.
                let targetRow = nRow + rowIterator;
                let targetColumn = nColumn + colIterator;

                // Testes para verificar se o elemento target não pertence ao grid ou é elemento bomba.
                if (targetRow < 0 || targetColumn < 0) continue;
                if (targetRow >= this.minefield.rows || targetColumn >= this.minefield.columns) continue;
                if (rowIterator == 0 && colIterator == 0) continue;

                // Incrementando o counter no elemento target.
                this.counterIncrement(targetRow, targetColumn);

                // console.log(`Row: ${nRow}\nColumn: ${nColumn}\nTarget Row: ${targetRow}\nTarget Column: ${targetColumn}\nTESTS - Range Min: ${testRangeMin} | Range Max: ${testRangeMax} | Diff: ${testDiff}`);
            }
        }
    }

    counterIncrement(targetRow, targetColumn) {

        const targetElement = this.minefield.mdm.minefieldDOM.querySelector(`#_${targetRow}-${targetColumn}`);
        let counter = parseInt(targetElement.getAttribute('data-count'));
        counter++;
        if (targetElement.getAttribute('data-type') != 'bomb') {
            targetElement.setAttribute('data-count', counter);
            targetElement.setAttribute('data-type', 'counter');
        }
    }
}
