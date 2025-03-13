export default class RandomBombs {

    constructor (minefield, measure, measurement = 'ratio') {
        this.minefield = minefield;
        this.volume = this.minefield.rows * this.minefield.columns;
        this.measure = measure;
        this.measurement = measurement;

        this.ratioBomb = this.setRatioBombs();
    }
    
    // Define a quantidade de bombas no grid. Se measurement: 'raio', measure interpreta proporção de bombas.
    setRatioBombs() {

        let bombs;
        // Se measurement: 'unity', measure é interpretado como unidade de bombas.
        if (this.measurement == 'ratio') {
            if (this.measure > 1 || this.measure < 0) {
                alert('The measure proportion must be between 0 and 1.');
                throw new Error('The measure proportion must be between 0 and 1.');
            }
            bombs = Math.floor(this.volume * this.measure);
            if (bombs == 0 && this.measure > 0) {
                bombs++;
            }
        // Se measurement: 'ratio', measure é interpretado como proporção de bombas.
        } else if (this.measurement == 'unity') {
            if (this.measure > this.volume) {
                alert('the number of bombs must be under the total volume of the minefield.');
                throw new Error('the number of bombs must be under the total volume of the minefield.');
            } else if (this.measure < 0) {
                alert('the number of bombs can not be under 0.');
                throw new Error('the number of bombs can not be under 0.');
            } else if (!Number.isInteger(this.measure)) {
                alert(`The number of bombs has been rounded down because a float number (${this.measure}) is used to define the number of bombs...`)
            }
            bombs = Math.floor(this.measure);
        }

        return bombs;
    }

    setNonRandomizedArr() {

        const arrBlank = Array(this.volume - this.ratioBomb).fill(0);
        const arrBomb = Array(this.ratioBomb).fill(1);
        const arrNonRandomized = [...arrBlank, ...arrBomb];

        return arrNonRandomized;
    }

    // Fisher Yates Shuffle Algorithm
    setRandomizedArr(arr) {

        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        
        return arr;
    }

    mergeRandomBombs(arrRandomized) {

        this.minefield.mdm.minefieldDomElementsForEach((element, index) => {
            if (arrRandomized[index] == 1) {
                element.setAttribute('data-type', 'bomb');
            }
        })
        console.log(this.minefield.mdm.minefieldDOM);
    }
}
