import ContaBancaria from "./ContaBancaria.js";
import Imprimivel from "./Imprimivel.js";

class Banco implements Imprimivel {
  private _listaContas: ContaBancaria[] = [];

  public inserir(conta: ContaBancaria): void {
    this._listaContas.push(conta);
  }

  public remover(conta: ContaBancaria | null): void {
    if (this._listaContas.length != 0) {
      this._listaContas.forEach((itemConta, indexConta, arr) => {
        if (itemConta === conta) {
          arr.splice(indexConta, 1);
        }
      });
    }
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
