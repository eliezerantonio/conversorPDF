class Processor {

    static process(data) {
        var a = data.split("\n");
        var rows = [];

        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        console.log(rows);
    }

}

module.exports = Processor;