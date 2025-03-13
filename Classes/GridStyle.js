export default class GridStyle {

    constructor (mdm) {
        this.mdm = mdm;
    }

    clickElement() {

        this.mdm.minefieldDomElementsForEach(element => {
            element.addEventListener('click', () => {
                let counterCase;
                counterCase = this.typeElementStyle(element);

                if (counterCase) {
                    this.classElementStyle(element);
                }
            })
        })
    }

    typeElementStyle(element) {

        const type = element.getAttribute('data-type');

        switch (type) {
            case 'blank':
                element.classList.add('blank-style');
                break;
            case 'bomb':
                element.innerHTML = '<img src="./assets/bomb-icon.png" alt="bomb-icon">';
                element.classList.replace('cell-start-style', 'bomb-style');
                break;
            case 'counter':
                element.classList.add('blank-style');
                return true;
        }
    }

    classElementStyle(element) {

        const counter = element.getAttribute('data-count');

        switch (counter) {
            case '1':
                element.innerHTML = 1;
                element.classList.add('first');
                break;
            case '2':
                element.innerHTML = 2;
                element.classList.add('second');
                break;
            case '3':
                element.innerHTML = 3;
                element.classList.add('third');
                break;
            case '4':
                element.innerHTML = 4;
                element.classList.add('fourth');
                break;
            case '5':
                element.innerHTML = 5;
                element.classList.add('fifth');
                break;
            case '6':
                element.innerHTML = 6;
                element.classList.add('sixth');
                break;
            case '7':
                element.innerHTML = 7;
                element.classList.add('seventh');
                break;
            case '8':
                element.innerHTML = 8;
                element.classList.add('eighth');
                break;
        }
    }

    rightClickElement() {

        this.mdm.minefieldDomElementsForEach(element => {
            // a desenvolver...
        })
    }
}