// quando necessito que duas condições ou +
// retornem true para eu realizar uma acao 


let idade = 24;
let dinheiroCarteira = 10;

let filme = "homem aranha"
let valorIngresso = 30
let classificacaoFilme = 10

let podeAssistir = false;
let mensagem = "Nao pode assistir ao filme.";


if (idade >= classificacaoFilme &&
    dinheiroCarteira >= valorIngresso) {
    podeAssistir = true
    mensagem = "Pode assistir ao filme."
}

console.log(mensagem)

