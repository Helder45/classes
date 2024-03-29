class ContaBancaria {
    _numeroConta;
    _saldo;
    constructor(numeroConta, saldo) {
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    get numeroConta() {
        return this._numeroConta;
    }
    get saldo() {
        return this._saldo;
    }
    set setNumeroConta(numeroConta) {
        this._numeroConta = numeroConta;
    }
    set setSaldo(saldo) {
        this._saldo = saldo;
    }
}
export default ContaBancaria;
