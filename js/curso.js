/* AUTOR: MOISÉS */
var cadastroNome; 
let cadastroUsuario; 
let cadastroTextoCompleto;
let quantidade;
let estoque;
let saldo;
let mensagem;
let confirmacao;

cadastroNome = window.prompt("Qual é o seu nome?");
cadastroUsuario = window.prompt("Qual é o seu usuário?");
confirmacao = window.confirm("Deseja compartilhar os seus dados?");

estoque = 100;
quantidade = 10;

saldo = estoque - quantidade;
saldo = saldo -1;
saldo -= 1;


cadastroTextoCompleto = "Nome do usuário: ";
cadastroTextoCompleto += cadastroNome;
cadastroTextoCompleto += ", login do usuário: ";
cadastroTextoCompleto += cadastroUsuario;

if( confirmacao == true ) {
    if( cadastroUsuario == "moises" ){
        console.log("Você precisa pagar sua assinatura");
    }else{
        console.log("seja bem vindo(a) " + cadastroUsuario );
    }
}else{
    console.log("O usuário optou por não compartilhar suas informações");
}








cadastroNome = "José";