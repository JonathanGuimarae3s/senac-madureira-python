/**
 * 1. Fácil — Criando e chamando uma função
Em um sistema de escola, crie uma função chamada mensagemAluno que apresente a mensagem
“Bem-vindo ao ambiente escolar”. Depois, chame a função para verificar seu funcionamento.


 */


function mensagemAluno() {
    console.log("Bem-vindo ao ambiente escolar");
}


mensagemAluno()

/**
2. Fácil–médio — Função com parâmetros e retorno
Crie uma função que receba duas notas. A função deverá calcular e retornar a média. Teste a função
com pelo menos três valores diferentes e apresente os resultados.
  
recebe 2 parametros


 */


function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2
}

 console.log(calcularMedia(2,3))




/**

3. Médio — Função com regra de decisão
Crie uma função que analise média de duas notas. Quando o valor for igual ou superior a 7, a função
deverá retornar “Aprovado”; caso contrário, deverá retornar “Reprovado”. Faça diferentes chamadas
para testar as duas possibilidades
 * 
 */



function analisarMedia(nota1, nota2) {
 
    let media = calcularMedia(nota1,nota2)

    if(media>=7){
        return "Aprovado"
    }

    return "Reprovado"
}

console.log(analisarMedia(8,9));
console.log(analisarMedia(5,5));





