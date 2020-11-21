class Table {

    constructor(arr) {
        this.header = arr[0];
       // arr.shift(); //remove sempre o primeiro elemento do array
        this.rows = arr;
    }
}

module.exports = Table;