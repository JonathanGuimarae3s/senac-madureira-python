class Produto {

    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    mostrarInformacoes() {
        console.log("NOME DO PRODUTO: " + this.nome);
        console.log("PREÇO DO PRODUTO R$" + this.preco);
        console.log("ESTOQUE DO PRODUTO:  " + this.estoque);
    }
}

let produto1 = new Produto("Teclado", 20, 300)
let produto2 = new Produto("Garrafa", 10, 2)
let produto3 = new Produto("Mouse", 2, 4)



produto1.mostrarInformacoes()