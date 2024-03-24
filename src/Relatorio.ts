import Imprimivel from "./Imprimivel";

class Relatorio{
    gerarRelatorio(imprimivel: Imprimivel): string {
        return imprimivel.mostrarDados();
    }
}

export default Relatorio;