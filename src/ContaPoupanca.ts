import ContaBancaria from "./ContaBancaria.js";
import Imprimivel from "./Imprimivel.js";

class ContaPoupanca extends ContaBancaria implements Imprimivel{
    private taxaDeOperacao: number;

    constructor(numeroConta: number, saldo: number, taxaDeOperacao: number) {
        super(numeroConta, saldo);
        this.taxaDeOperacao = taxaDeOperacao;
    }

    public mostrarDados(): void {
        console.log(`\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Taxa de Operação: ${this.taxaDeOperacao}\n`);
    }

    public sacar(valor: number): number {
        if (this.saldo > 0 && this.saldo > valor) {
            return this.setSaldo = this.saldo - valor - this.taxaDeOperacao;
        } else{
            console.log("\nNão foi possível realizar o saque. Saldo inalterado.\n");
        }

        return 0;
        
    }

    public depositar(valor: number): number {
        return this.setSaldo = this.saldo + valor - this.taxaDeOperacao;
    }

    public transferir(valor: number, conta: ContaBancaria): number {
        if (valor > this.saldo) {
            console.log("\nO valor informado é maior do que o saldo existente. Por favor, tente novamente.\n");
        }
        return conta.depositar(this.sacar(valor));
    }
}

export default ContaPoupanca;