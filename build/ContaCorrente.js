"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaCorrente extends ContaBancaria_1.default {
    _limite;
    constructor(numeroConta, saldo, limite) {
        super(numeroConta, saldo);
        this._limite = limite;
    }
    mostrarDados() {
        return `\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Limite do crédito da conta: ${this._limite}\n`;
    }
    sacar(valor) {
        const diferenca = this.saldo - valor;
        if (diferenca < 0) {
            if ((diferenca * -1) > this._limite) {
                console.log(`Impossível sacar mais que seu limite.`);
            }
            else {
                return this.setSaldo = this.saldo - valor;
            }
        }
        else {
            return this.setSaldo = this.saldo - valor;
        }
        return 0;
    }
    depositar(valor) {
        return this.setSaldo = this.saldo + valor;
    }
}
exports.default = ContaCorrente;
