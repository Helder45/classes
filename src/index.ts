import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import Relatorio from "./Relatorio";

const contaPoupanca1 = new ContaPoupanca("12345", 0, 6.75);
const contaCorrente1 = new ContaCorrente("63454", 0, 100);
const relatorioGeral = new Relatorio();

// console.log(contaPoupanca1.mostrarDados());
console.log(contaCorrente1.mostrarDados());

// contaPoupanca1.depositar(500);
contaCorrente1.depositar(200);

// console.log(contaPoupanca1.mostrarDados());
console.log(contaCorrente1.mostrarDados());

// contaPoupanca1.sacar(600);
contaCorrente1.sacar(300);

// console.log(relatorioGeral.gerarRelatorio(contaPoupanca1));
console.log(relatorioGeral.gerarRelatorio(contaCorrente1));
