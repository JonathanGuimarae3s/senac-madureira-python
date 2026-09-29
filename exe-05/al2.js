let numero = Number(prompt("Digite a quantidade desejada"));
let estoque = (numero <=5 && numero>1) ? " ESTOQUE BAIXO " : (numero<=0)? " ZERADO " : "DISPONIVEL EM ESTOQUE";
console.log(estoque);
