import ContaBancaria from "./ContaBancaria.js";
class ContaPoupanca extends ContaBancaria {
    taxaDeOperacao;
    constructor(numeroConta, saldo, taxaDeOperacao) {
        super(numeroConta, saldo);
        this.taxaDeOperacao = taxaDeOperacao;
    }
    mostrarDados() {
        console.log(`\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Taxa de Operação: ${this.taxaDeOperacao}\n`);
    }
    sacar(valor) {
        if (this.saldo > 0 && this.saldo > valor) {
            return this.setSaldo = this.saldo - valor - this.taxaDeOperacao;
        }
        else {
            console.log("\nNão foi possível realizar o saque. Saldo inalterado.\n");
        }
        return 0;
    }
    depositar(valor) {
        return this.setSaldo = this.saldo + valor - this.taxaDeOperacao;
    }
    transferir(valor, conta) {
        if (valor > this.saldo) {
            console.log("\nO valor informado é maior do que o saldo existente. Por favor, tente novamente.\n");
        }
        return conta.depositar(this.sacar(valor));
    }
}
export default ContaPoupanca;
