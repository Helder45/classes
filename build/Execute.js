"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = __importDefault(require("./ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("./ContaPoupanca"));
// import prompt from 'prompt-sync';
class Execute {
    _contaCorrente;
    _contaPoupanca;
    constructor(contaPoupanca, contaCorrente) {
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
const execution = new Execute(new ContaPoupanca_1.default(1234, 0, 5), new ContaCorrente_1.default(123, 0, 100));
execution.criarConta();
