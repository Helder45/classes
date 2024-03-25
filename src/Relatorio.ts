import Imprimivel from "./Imprimivel";

class Relatorio{
    gerarRelatorio(imprimivel: Imprimivel): void {
        console.log(imprimivel.mostrarDados());
    }
}

export default Relatorio;