/*
Sistema de Cadastro de Peças
-  Permitir o cadastro da peça somente se ela pesar mais de 100g.
- Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
- Validar se o nome da peça possui mais de 3 caracteres.
*/  

let peso = 50
if(peso<100){
    console.log("A peça deve ter no minimo 100g")
}else{
    console.log("A peça possui o tamanho adequado")
}

var listaDePecas = ["Lanterna", "Motor", "Amortecedor", "cambio", "painel", "cabeçote"]
if(listaDePecas.length < 10){
    //é possivel cadastrar
    console.log("É possivel cadastrar mais!! me da mais!! birllll!!!")
} else{
    console.log("Não vai dar não.... acabou o espaço")
}




if(nomePeca.length>3){
    console.log("Nome de peça adequado para o cadastro")
    }else{
        console.log("O nome da peça deve ter mais que 3 caracteres, digite um nome adequado")
    }

let nomePeca = "ivonete em cima do chevette"
switch(nomePeca.length){
    case 0:
    console.log("O nome nao pode ser vazio")
    break;
    case 1:
        console.log("o nome tem apenas 1 caracter e precisa ser mais que 3")
    break;
    case 2:
    console.log("o nome tem apenas 2 caracteres e precisa ser mais que 3")
    break;
    case 3:
    console.log("o nome tem apenas 3 caracteres e precisa ser mais que 3")
    break;
    default:
        console.log("o nome esta adequado")
    break;
}