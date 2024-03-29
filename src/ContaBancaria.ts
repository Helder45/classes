abstract class ContaBancaria{
    private _numeroConta: number;
    private _saldo: number;
    constructor(numeroConta: number, saldo: number) {
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get numeroConta(): number {
        return this._numeroConta;
    }

    get saldo(): number {
        return this._saldo;
    }

    set setNumeroConta(numeroConta: number) {
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