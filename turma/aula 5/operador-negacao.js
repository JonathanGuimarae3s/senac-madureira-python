const idade = 20
const possuiIngresso = true

const resultadoCondicao = idade >= 18 && possuiIngresso

console.log(
   `resultado da condição -> ${resultadoCondicao}`
)

console.log(
   `resultado da condição negada -> ${!resultadoCondicao}`
)




/*
O motorista pode realizar a entrega se tiver CNH válida E veículo disponível E NÃO estiver suspenso.
const cnhValida = true;
const veiculoDisponivel = true;
const suspenso = false;
Requisito: Combine && e !. Exiba uma mensagem clara para o resultado verdadeiro e outra para o falso. Depois, altere os
valores e faça pelo menos 3 testes.


*/

const cnhValida = true;
const veiculoDisponivel = true;
const suspenso = false;

if(cnhValida && veiculoDisponivel && !suspenso){

   console.log("entrega")
} else{
   console.log(" nao pode realizar a entrega")
}
