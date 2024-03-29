import ContaBancaria from "./ContaBancaria.js";
import Imprimivel from "./Imprimivel.js";

class ContaCorrente extends ContaBancaria implements Imprimivel{
    private _limite: number;

    constructor(numeroConta: number, saldo: number, limite: number) {
        super(numeroConta, saldo);
        this._limite = limite;
    }

    public mostrarDados(): void {
        console.log(`\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Limite do crédito da conta: ${this._limite}\n`);
        
    }

    public sacar(valor: number): number {
        const diferenca = this.saldo - valor;
        
        if (diferenca < 0) {
            if((diferenca * -1) > this._limite) {
                console.log(`\nImpossível sacar mais que seu limite.\n`);
            } else {
                return this.setSaldo = this.saldo - valor;
            }
        } else {
            return this.setSaldo = this.saldo - valor;
        }

        return 0;
    }

    public depositar(valor: number): number {
        return this.setSaldo = this.saldo + valor;
    }

    public transferir(valor: number, conta: ContaBancaria): number {
        if (valor > this.saldo) {
            console.log("\nO valor informado é maior do que o saldo existente. Por favor, tente novamente.\n");
        }
        return conta.depositar(this.sacar(valor));
    }
}

export default ContaCorrente;