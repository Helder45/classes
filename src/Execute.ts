import PromptSync from "prompt-sync";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import Banco from "./Banco";

const input = PromptSync();

class Execute {
    private _contaCorrente: ContaCorrente;
    private _contaPoupanca: ContaPoupanca;

    constructor(contaPoupanca: ContaPoupanca, contaCorrente: ContaCorrente) {
        this._contaCorrente = contaCorrente;
        this._contaPoupanca = contaPoupanca;
    }

    criarConta() {
        const a = input("Digite asdmfgnfdjkge");
    // Resto do seu código
    }
    
}



const execution = new Execute(new ContaPoupanca(1234, 0, 5), new ContaCorrente(123, 0, 100));

execution.criarConta();