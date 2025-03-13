export default class MinefieldDomMethods {

    constructor (minefieldDOM) {
        this._minefieldDOM = minefieldDOM;
    }

    get minefieldDOM() {
        return this._minefieldDOM;
    }

    set minefieldDOM(newDom) {
        this._minefieldDOM = newDom;
    }

    minefieldDomElementsForEach(callback) {
        const minefieldElements = Array.from(this.minefieldDOM.children);
        minefieldElements.forEach(callback);
    }
}
