/* AUTOR: MOISÉS */
var cadastroNome; 
let cadastroUsuario; 
let cadastroTextoCompleto;
let quantidade;
let estoque;
let saldo;
let mensagem;


cadastroNome = window.prompt("Qual é o seu nome?");
cadastroUsuario = window.prompt("Qual é o seu usuário?");


estoque = 100;
quantidade = 10;

saldo = estoque - quantidade;
console.log(saldo);
saldo = saldo -1;
console.log(saldo);
saldo -= 1;
console.log(saldo);

/* alert(saldo); */

/* 
cadastroNome = "Moisés";
cadastroUsuario = "moises";
 */
cadastroTextoCompleto = "Nome do usuário: ";
cadastroTextoCompleto += cadastroNome;
cadastroTextoCompleto += ", login do usuário: ";
cadastroTextoCompleto += cadastroUsuario;
console.log(cadastroTextoCompleto);

/* alert(cadastroTextoCompleto); */


cadastroNome = "José";