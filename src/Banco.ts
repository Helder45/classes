import ContaBancaria from "./ContaBancaria";
import Imprimivel from "./Imprimivel";

class Banco implements Imprimivel {
  private _listaContas: ContaBancaria[] = [];

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

  public procurarConta(numero: number): ContaBancaria | null {
    const contaEncontrada = this._listaContas.find((conta) => {
      return conta.numeroConta == numero;
    });

    if (contaEncontrada) {
      return contaEncontrada;
    }

    return null;
  }

  mostrarDados(): void {
    for (let conta of this._listaContas) {
      console.table(conta);
    }
  }
}

export default Banco;
