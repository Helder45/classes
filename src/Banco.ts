import ContaBancaria from "./ContaBancaria";
import ContaPoupanca from "./ContaPoupanca";
import ContaCorrente from "./ContaCorrente";

class Banco {
    private _listaContas: object[] = [];

    public inserir(conta: ContaBancaria): void {
        this._listaContas.push(conta);
    }

    public remover(conta: ContaBancaria): void {
        // console.log("Antes de remover");
        // console.log(this._listaContas);
        if (this._listaContas.length != 0) {
            this._listaContas.forEach((itemConta, indexConta, arr) => {
                if (itemConta === conta) {
                    arr.splice(indexConta, 1);
                }
            });
        }
        // console.log("Depois de remover");
        // console.log(this._listaContas);
    }

    public procurarConta(numero: number): ContaBancaria | null{
        // for (const conta of this._listaContas) {
        //     // if (conta.numeroConta === numero) {
        //         return this._listaContas[1];
        //     // }
        // }
        return null
    }

}

export default Banco;