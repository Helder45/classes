abstract class ContaBancaria {
    private _numeroConta: string;
    private _saldo: number;
    constructor(numeroConta: string, saldo: number) {
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set setNumeroConta(numeroConta: string) {
        this._numeroConta = numeroConta;
    }

    set setSaldo(saldo: number){
        this._saldo = saldo;
    }

    public abstract sacar(valor: number): number;
    public abstract depositar(valor: number): number;
    public abstract transferir(valor: number, conta: ContaBancaria): number;
}

export default ContaBancaria;