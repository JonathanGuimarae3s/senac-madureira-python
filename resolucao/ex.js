/**
 * 
 * Fácil — Lista de cursos
Crie um array com cinco cursos oferecidos por uma escola. Mostre o segundo e o quinto. Depois
substitua um dos cursos e apresente a lista atualizada.
**/

let cursos = ["pyhton", "java","js","Ruby","c++", "Asembly"]

console.log("O dado da segunda posicao é -=>> "  +  cursos[1])
console.log("O dado da quinta posicao é -=>> "  +  cursos[4])


/**
 * 
2. Fácil–médio — Cadastro de alunos
Crie uma lista com quatro alunos, adicione mais três e apresente todos os nomes e a quantidade
total de alunos.
**/
cursos.push("c#")
cursos.push("lua")
cursos.push("php")

console.log("Esses sao os curso que temos disponiveis -> : " + cursos);
console.log("Temos apenas -> : " + cursos.length+ "  em ti");
/**
 * 
3. Médio — Frequência escolar
Um sistema possui as frequências 90, 65, 80, 50, 100, 72 e 85. Percorra os valores e informe quais
alunos possuem frequência igual ou superior a 75%. Ao final, informe quantos atingiram esse valor.

 */

let frequencias = [90, 65, 80, 50, 100, 72 , 85]
let qtd = 0
for (let i = 0; i < frequencias.length; i++) {
    const frequencia = frequencias[i];
    
    if (frequencia>=75) {
        qtd++
    }
}

console.log("A qtd de notas superior ou igual a 75 foi : " + qtd );

