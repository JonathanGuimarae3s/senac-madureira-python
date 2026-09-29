/* Desafio 1 - Maior entre dois
Crie duas variáveis numéricas e informe qual número é maior. Se forem iguais, exiba "Os números são
iguais".
Regras: use JavaScript; escolha entre if, else if, else ou switch conforme o problema; teste o código com pelo menos
3 valores diferentes; antes de executar, anote qual saída você espera */

let numero1 = Number(prompt("Informe um número"));
let numero2 = Number(prompt("Informe outro número"));
let mensagem;
if (numero1 == numero2) {
    mensagem = "Os números são iguais";

} else if (numero1 > numero2) {
    mensagem = "O número " + numero1 + " é maior que o número " + numero2;

} else {
    mensagem = "O  número " + numero2 + " é maior que o " + numero1;

}
document.write(mensagem);