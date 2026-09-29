/*O frete é grátis se o cliente for Premium E a compra for >= 100, OU se a compra for >= 500 independentemente do
perfil*/

let Premium = false;
let compra = 100;

if((Premium === true && compra>=100) || compra >=500){
    console.log("Frete Grátis")
} else{
    console.log("VocÊ não atingiu o valor mínimo")
}