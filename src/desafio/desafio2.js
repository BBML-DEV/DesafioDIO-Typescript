// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }


//resposta compilada
"use strict";

var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Programador"] = 0] = "Programador";
    Trabalho[Trabalho["JogadorDeFutebol"] = 1] = "JogadorDeFutebol";
    Trabalho[Trabalho["ChefeDeCozinha"] = 2] = "ChefeDeCozinha";
    Trabalho[Trabalho["Secretaria"] = 3] = "Secretaria";
})(Trabalho || (Trabalho = {}));

let pessoa1 = {
    nome: "Paulo Vitor",
    idade: 23,
    profissao: Trabalho.Programador
};

let pessoa2 = {
    nome: "Rafael Veiga",
    idade: 27,
    profissao: Trabalho.JogadorDeFutebol
};

let pessoa3 = {
    nome: "Enrico",
    idade: 24,
    profissao: Trabalho.ChefeDeCozinha
};

let pessoa4 = {
    nome: "Bárbara",
    idade: 40,
    profissao: Trabalho.Secretaria
};


