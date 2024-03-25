import ContaBancaria from "./ContaBancaria";
import Imprimivel from "./Imprimivel";

class ContaPoupanca extends ContaBancaria implements Imprimivel{
    private taxaDeOperacao: number;

    constructor(numeroConta: number, saldo: number, taxaDeOperacao: number) {
        super(numeroConta, saldo);
        this.taxaDeOperacao = taxaDeOperacao;
    }

    mostrarDados(): void {
        console.log(`\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Taxa de Operação: ${this.taxaDeOperacao}\n`);
    }

    public sacar(valor: number): number {
        if (this.saldo > 0 && this.saldo > valor) {
            return this.setSaldo = this.saldo - valor - this.taxaDeOperacao;
        } else{
            console.log("Não foi possível realizar o saque. Saldo inalterado.");
        }

        return 0;
        
    }

    public depositar(valor: number): number {
        return this.setSaldo = this.saldo + valor - this.taxaDeOperacao;
    }

    public transferir(valor: number, conta: ContaBancaria): number {
        return conta.depositar(this.sacar(valor));
    }
}

export default ContaPoupanca;