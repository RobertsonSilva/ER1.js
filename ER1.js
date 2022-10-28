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

var listaDePecas = ["Lanterna", "Motor", "Amortecedor", "cambio", "painel", "cabeçote" ]
if(listaDePecas.length < 10){
    //é possível cadastrar
    console.log(É possível cadastrar mais! Manda mais!)
}else{
    console.log(Não vai dar não... acabou o espaço!)
}