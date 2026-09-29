
//Exibir as 12 parcelas de uma compra.​

let valorCompra= 1000
let numeroParcela = 12
let divisao = valorCompra/numeroParcela

for(let i = 1;i<numeroParcela;i++){

document.write("NÚMERO DA PARCELA: " + i );
document.write("</br> VALOR DA PARCELA: " + divisao );
}