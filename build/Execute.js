"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ContaCorrente_1 = __importDefault(require("./ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("./ContaPoupanca"));
const input = (0, prompt_sync_1.default)();
class Execute {
    _contaCorrente;
    _contaPoupanca;
    constructor(contaPoupanca, contaCorrente) {
        this._contaCorrente = contaCorrente;
        this._contaPoupanca = contaPoupanca;
    }
    criarConta() {
        const a = input("Digite asdmfgnfdjkge");
        // Resto do seu código
    }
}
const execution = new Execute(new ContaPoupanca_1.default(1234, 0, 5), new ContaCorrente_1.default(123, 0, 100));
execution.criarConta();
