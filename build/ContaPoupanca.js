"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaPoupanca extends ContaBancaria_1.default {
    taxaDeOperacao;
    constructor(numeroConta, saldo, taxaDeOperacao) {
        super(numeroConta, saldo);
        this.taxaDeOperacao = taxaDeOperacao;
    }
    mostrarDados() {
        return `\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Taxa de Operação: ${this.taxaDeOperacao}\n`;
    }
    sacar(valor) {
        if (this.saldo > 0 && this.saldo > valor) {
            return this.setSaldo = this.saldo - valor - this.taxaDeOperacao;
        }
        else {
            console.log("Não foi possível realizar o saque. Saldo inalterado.");
        }
        return 0;
    }
    depositar(valor) {
        return this.setSaldo = this.saldo + valor - this.taxaDeOperacao;
    }
}
exports.default = ContaPoupanca;
