var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var leitor = new Reader();


async function main() {
    var dados = await leitor.read("./user.csv");
    var dadosProcessados = Processor.process(dados);
    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.rows);
}

main();