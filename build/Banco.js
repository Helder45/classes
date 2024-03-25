"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    _listaContas = [];
    inserir(conta) {
        this._listaContas.push(conta);
    }
    remover(conta) {
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
    procurarConta(numero) {
        const contaEncontrada = this._listaContas.find((conta) => {
            return conta.numeroConta == numero;
        });
        if (contaEncontrada) {
            return contaEncontrada;
        }
        return null;
    }
    mostrarDados() {
        for (let conta of this._listaContas) {
            console.table(conta);
        }
    }
}
exports.default = Banco;
