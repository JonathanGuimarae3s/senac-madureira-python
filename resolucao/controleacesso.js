/*

Uma empresa está desenvolvendo um sistema para controlar o acesso dos funcionários a
uma área restrita.
O sistema deverá realizar até 5 tentativas de acesso.
Em cada tentativa, deverão ser consideradas as seguintes informações:
credencialAtiva informa se a credencial do funcionário está ativa.
senhaCorreta informa se a senha digitada está correta.
usuarioBloqueado informa se o funcionário está bloqueado no sistema.
nivelAcesso informa o nível de acesso do funcionário, podendo variar de 1 a 3.
.
O acesso deverá ser autorizado somente quando a credencial estiver ativa, a senha estiver
correta, o usuário não estiver bloqueado e o nível de acesso for igual ou superior a 2.
Quando o acesso for autorizado, o sistema deverá informar "Acesso autorizado" e
interromper as tentativas.
Quando alguma condição não for atendida, o sistema deverá informar "Acesso negado" e
realizar uma nova tentativa, desde que ainda existam tentativas disponíveis.
A cada tentativa, o sistema também deverá mostrar o número da tentativa atual.
Se as 5 tentativas forem utilizadas sem que o acesso seja autorizado, o sistema deverá
informar "Número máximo de tentativas atingido. Acesso bloqueado."
Ao final, o sistema deverá informar quantas tentativas foram realizadas


*/

let tentativa=5

let credencialAtiva = true
let senhaCorreta = 12345
let usuarioBloqueado = false
let nivelAcesso = 2 

let senhaDigitida = 12345

  
for(let tentativa = 1; tentativa <=5;tentativa++){
    if (credencialAtiva && 
        senhaDigitida === senhaCorreta && 
        !usuarioBloqueado &&
        nivelAcesso >= 2) {
       
        console.log("Acesso Autorizado!")
        break
    } else{
       
        let tentativaRestantes = 5-tentativa
        console.log("Acesso Negado! Restam " + tentativaRestantes + " tentativas!")
    
        if (tentativa === 5){
            console.log("Número máximo de tentativas atingido. Acesso bloqueado.")
        }

    }
    
}



console.log("Foram utilizadas " + tentativa + " tentativas!")