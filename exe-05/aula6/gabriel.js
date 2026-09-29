let nota = 4;
let media = 7;
let frequencia = 75
let frequenciaAluno = 80;
let aprovado = false;
let mensagem = "Você foi reprovado";

if (nota >= media && frequenciaAluno >= frequencia) {
    aprovado = true
    mensagem = "Você foi aprovado"
}
console.log(mensagem)