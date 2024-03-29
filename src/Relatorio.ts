import Imprimivel from "./Imprimivel.js";

class Relatorio{
    gerarRelatorio(imprimivel: Imprimivel): void {
        console.log(imprimivel.mostrarDados());
    }
}

export default Relatorio;