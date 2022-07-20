// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');

// campoSaldo.innerHTML = 0

// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }

// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }

// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });

// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */



//resposta compilada
"use strict";
let btnAtualizar = document.getElementById("btn-atualizar");
let btnDeletar = document.getElementById("btn-deletar");
let somar = document.getElementById("somar");
let campoSaldo = document.getElementById("campo-saldo");
let totalSaldo = 0;
function somarNoSaldo(soma) {
    if (campoSaldo) {
        totalSaldo += soma;
        campoSaldo.innerHTML = totalSaldo.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    somar.value = " ";
}
function limparSaldo() {
    if (campoSaldo) {
        totalSaldo = 0;
        campoSaldo.innerHTML = totalSaldo.toString();
    }
}
if (btnAtualizar) {
    btnAtualizar.addEventListener("click", () => {
        somarNoSaldo(Number(somar.value));
    });
}
btnDeletar.addEventListener('click', () => {
    limparSaldo();
});
