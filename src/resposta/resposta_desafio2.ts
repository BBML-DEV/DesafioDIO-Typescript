enum Trabalho {
    Programador,
    JogadorDeFutebol,
    ChefeDeCozinha,
    Secretaria
}

//crio um "molde" com caracteristicas genericas que podem ser atribuidas as outras pessoas
type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = { 
    nome: "Paulo Vitor",
    idade: 23,
    profissao: Trabalho.Programador 
}

let pessoa2: Humano = {
    nome: "Rafael Veiga",
    idade: 27,
    profissao: Trabalho.JogadorDeFutebol
}

let pessoa3: Humano = { 
    nome: "Enrico",
    idade: 24,
    profissao: Trabalho.ChefeDeCozinha
}

let pessoa4: Humano = {
    nome: "Bárbara",
    idade: 40,
    profissao: Trabalho.Secretaria
}