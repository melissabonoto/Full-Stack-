document.getElementById("d1").innerHTML = "MELISSA BONOTO";

/* let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade:");
let ano = 2026;

let ano_nasc = ano - idade;

document.getElementById("resp_ex1").innerHTML = "Olá " + nome + ", você nasceu em " + ano_nasc; 
function mensagem() {
    alert("Olá");
}

function mensagem2(texto) {
    alert(texto);
}

mensagem();
mensagem2("exemplo");

*/
function soma(a,b) { return a + b; }
function sub(a,b) { return a - b; }
function mult(a,b) { return a * b; }
function div(a,b) { return a/b; }
/*
resp = soma (5,56);
document.getElementById("resp_ex2").innerHTML = resp; 

function exemplo2() {
    let x = parseInt(document.getElementById("in_ex2").value);

    for(let i = 1; i <= x; i++){
        console.log(x + 1);
    }

    document.getElementById("resp_ex2").innerHTML = x;
}
*/ 
function exemplo3() {
    let a = parseInt(document.getElementById("in1_ex3").value);
    let b = parseInt(document.getElementById("in2_ex3").value);

    let resp = a + b;

    document.getElementById("resp_ex3").innerHTML = resp;
}

function exemplo4() {
    let a = parseInt(document.getElementById("in1_ex4").value);
    let b = parseInt(document.getElementById("in2_ex4").value);

    let resp = 0;
    if (a < 0 || b < 0) {
        resp = soma(a,b);
    }else{
        resp = mult(a,b);
    }
}

    document.getElementById("resp_ex4").innerHTML = resp;