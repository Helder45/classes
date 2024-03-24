import ContaBancaria from "./ContaBancaria";

class Banco {
    private _listaContas: object[] = [];

    public inserir(conta: ContaBancaria) {
        this._listaContas.push(conta);
    }

    public remover(conta: ContaBancaria) {
        this._listaContas.forEach((itemConta) => {
            console.log(conta);
           //teste 
        });
    }

}