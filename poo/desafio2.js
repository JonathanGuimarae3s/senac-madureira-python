class Funcionario {
    constructor(nome,cargo,salario){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    verificarSalario(){
        if(this.salario <3000){
        console.log("Salário acima da referência")
    }else{
        console.log("Salário abaixo da referência")
    }
    }  


    aumentarSalario (){
        if(this.cargo === "Senior"){
            this.salario += 1000
        } 
        console.log(this.salario)
    }
}

let funcionario1 = new Funcionario("Jonathan","Junior",2000)
let funcionario2 = new Funcionario("Marcos", "Junior",1000)
let funcionario3 = new Funcionario("José", "Senior", 4000)

funcionario1.verificarSalario();
funcionario2.verificarSalario();
funcionario3.verificarSalario();
funcionario1.aumentarSalario();
funcionario2.aumentarSalario();
funcionario3.aumentarSalario();