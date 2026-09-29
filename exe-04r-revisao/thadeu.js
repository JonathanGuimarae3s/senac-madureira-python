let temperatura = Number(prompt("Digite a temperatura para saber o estado"))
if (temperatura <= 40){
    document.write("Temperatura normal")
} else if (temperatura > 40 && temperatura < 70){
    document.write("Atenção")
} else if (temperatura > 70){
    document.write("Temperatura critica")
} else {
    document.write("Erro")
}