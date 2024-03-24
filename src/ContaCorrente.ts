import ContaBancaria from "./ContaBancaria";
import Imprimivel from "./Imprimivel";

class ContaCorrente extends ContaBancaria implements Imprimivel{
    private _limite: number;

    constructor(numeroConta: string, saldo: number, limite: number) {
        super(numeroConta, saldo);
        this._limite = limite;
    }

    mostrarDados(): string {
        return `\nNúmero da conta: ${this.numeroConta}
        Saldo: R$${this.saldo}
        Limite do crédito da conta: ${this._limite}\n`;
        
    }

    public sacar(valor: number): number {
        const diferenca = this.saldo - valor;
        
        if (diferenca < 0) {
            if((diferenca * -1) > this._limite) {
                console.log(`Impossível sacar mais que seu limite.`);
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
        return conta.depositar(this.sacar(valor));
    }
}

export default ContaCorrente;