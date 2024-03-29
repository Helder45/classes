import ContaBancaria from "./ContaBancaria.js";
class ContaCorrente extends ContaBancaria {
    _limite;
    constructor(numeroConta, saldo, limite) {
        super(numeroConta, saldo);
        this._limite = limite;
    }
    mostrarDados() {
        console.log(`\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Limite do crédito da conta: ${this._limite}\n`);
    }
    sacar(valor) {
        const diferenca = this.saldo - valor;
        if (diferenca < 0) {
            if ((diferenca * -1) > this._limite) {
                console.log(`\nImpossível sacar mais que seu limite.\n`);
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
    transferir(valor, conta) {
        if (valor > this.saldo) {
            console.log("\nO valor informado é maior do que o saldo existente. Por favor, tente novamente.\n");
        }
        return conta.depositar(this.sacar(valor));
    }
}
export default ContaCorrente;
