import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

// import prompt from 'prompt-sync';

class Execute {
    private _contaCorrente: ContaCorrente;
    private _contaPoupanca: ContaPoupanca;

    constructor(contaPoupanca: ContaPoupanca, contaCorrente: ContaCorrente) {
        this._contaCorrente = contaCorrente;
        this._contaPoupanca = contaPoupanca;
    }

    criarConta() {

        let a = prompt("Digite asdmfgnfdjkge");

        //Pedir para o usuário o tipo da conta
        //Verificar o tipo da conta
        //Criar a conta, adicionando na lista do banco
        //Retornar sucesso ou erro.
    }
}



const execution = new Execute(new ContaPoupanca(1234, 0, 5), new ContaCorrente(123, 0, 100));

execution.criarConta();