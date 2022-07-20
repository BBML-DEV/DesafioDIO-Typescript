let btnAtualizar = document.getElementById("btn-atualizar");
let btnDeletar = document.getElementById("btn-deletar")!;
let somar = document.getElementById("somar") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");


let totalSaldo = 0;

limparSaldo();

function somarNoSaldo(soma: number) {
    if(campoSaldo){
        totalSaldo += soma;
        campoSaldo.innerHTML = totalSaldo.toString(); 
        limparCampoSoma();
    }
}

function limparCampoSoma(){
    somar.value = " ";
}

function limparSaldo(){
    if(campoSaldo){
        totalSaldo = 0;
        campoSaldo.innerHTML = totalSaldo.toString();
    }
}

if(btnAtualizar){
    btnAtualizar.addEventListener("click", () =>{
        somarNoSaldo(Number(somar.value));
    });
}

btnDeletar.addEventListener('click', () => { 
    limparSaldo();
});

