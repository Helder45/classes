import inquirer from "inquirer";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Banco from "./Banco.js";
import ContaBancaria from "./ContaBancaria.js";
class Execute {
    banco = new Banco();
    async criarConta() {
        const respostas = await inquirer.prompt([
            {
                name: "account_list",
                type: "list",
                message: "Qual tipo de conta deseja criar?",
                choices: ["Conta Poupança", "Conta Corrente"],
            },
        ]);
        const account_type = respostas.account_list;
        if (account_type === "Conta Poupança") {
            const poupanca = await inquirer.prompt([
                {
                    name: "account_number",
                    type: "number",
                    message: "Digite o número da conta: ",
                },
                {
                    name: "account_tax",
                    type: "number",
                    message: "Digite a taxa de operação da conta: ",
                },
            ]);
            try {
                if (!isNaN(poupanca.account_number) && !isNaN(poupanca.account_tax)) {
                    this.banco.inserir(new ContaPoupanca(poupanca.account_number, 0, poupanca.account_tax));
                    console.log("\nConta criada e adicionada com sucesso no banco.\n");
                }
                else {
                    throw new Error("\nApenas números são aceitos nos campos. Tente novamente.\n");
                }
            }
            catch (error) {
                console.error("Erro de tipo: ", error.message);
            }
        }
        else {
            const corrente = await inquirer.prompt([
                {
                    name: "account_number",
                    type: "number",
                    message: "Digite o número da conta: ",
                },
                {
                    name: "account_limit",
                    type: "number",
                    message: "Digite o limite da conta: ",
                },
            ]);
            try {
                if (!isNaN(corrente.account_number) && !isNaN(corrente.account_limit)) {
                    this.banco.inserir(new ContaCorrente(corrente.account_number, 0, corrente.account_limit));
                    console.log("\nConta criada e adicionada com sucesso no banco.\n");
                }
                else {
                    throw new Error("\nApenas números são aceitos nos campos.Tente novamente.\n");
                }
            }
            catch (error) {
                console.error("\nErro de tipo: ", error.message + "\n");
            }
        }
    }
    async selecionarConta() {
        const respostas = await inquirer.prompt([
            {
                name: "account_num",
                type: "number",
                message: "Insira o número da conta que deseja selecionar: ",
            },
        ]);
        const acc_num = respostas.account_num;
        const contaEncontrada = this.banco.procurarConta(acc_num);
        if (contaEncontrada instanceof ContaCorrente) {
            this.menu(contaEncontrada);
        }
        else if (contaEncontrada instanceof ContaPoupanca) {
            this.menu(contaEncontrada);
        }
        else {
            console.log("\nConta Inexistente. Por favor, tente novamente.\n");
        }
    }
    async menu(contaEncontrada) {
        let option = "";
        do {
            const opcao = await inquirer.prompt([
                {
                    name: "menu",
                    type: "rawlist",
                    message: "Escolha sua opção: ",
                    choices: [
                        "Depositar",
                        "Sacar",
                        "Transferir",
                        "Gerar Relatório",
                        "Retornar ao menu anterior",
                    ],
                },
            ]);
            switch (opcao.menu) {
                case "Depositar":
                    const deposit = await inquirer.prompt([
                        {
                            name: "deposit_value",
                            type: "number",
                            message: "Digite um valor para depositar na conta selecionada.",
                        },
                    ]);
                    if (typeof deposit.deposit_value == "number") {
                        contaEncontrada?.depositar(deposit.deposit_value);
                    }
                    else {
                        console.log("\nO valor deve ser inserido com apenas números. Tente novamente.\n");
                    }
                    break;
                case "Sacar":
                    const withdrawal = await inquirer.prompt([
                        {
                            name: "withdrawal_value",
                            type: "number",
                            message: "Digite um valor para realizar um saque na conta selecionada.",
                        },
                    ]);
                    if (typeof withdrawal.withdrawal_value == "number") {
                        contaEncontrada?.sacar(withdrawal.withdrawal_value);
                    }
                    else {
                        console.log("\nO valor deve ser inserido com apenas números. Tente novamente.\n");
                    }
                    break;
                case "Transferir":
                    const transfer = await inquirer.prompt([
                        {
                            name: "transfer_value",
                            type: "number",
                            message: "Digite um valor para transferir da conta selecionada.",
                        },
                        {
                            name: "transfer_account",
                            type: "number",
                            message: "Digite o número da conta a receber a transferência:",
                        },
                    ]);
                    if (typeof transfer.transfer_value == "number" &&
                        typeof transfer.transfer_account == "number") {
                        const contaATransferir = this.banco.procurarConta(transfer.transfer_account);
                        if (contaATransferir instanceof ContaBancaria) {
                            contaEncontrada?.transferir(transfer.transfer_value, contaATransferir);
                        }
                        else {
                            console.log("\nConta não encontrada, tente novamente.\n");
                        }
                    }
                    else {
                        console.log("\nO valor deve ser inserido com apenas números. Tente novamente.\n");
                    }
                    break;
                case "Gerar Relatório":
                    contaEncontrada.mostrarDados();
                    break;
                case "Retornar ao menu anterior":
                    console.log("\nVoltando ao menu principal...\n");
                    break;
                default:
                    console.log("\nEssa opção não existe!\n");
                    break;
            }
            option = opcao.menu;
        } while (option != "Retornar ao menu anterior");
    }
    async removerConta() {
        const respostas = await inquirer.prompt([
            {
                name: "account_n",
                type: "number",
                message: "Insira o número da conta que deseja remover: ",
            },
        ]);
        const acc_n = respostas.account_n;
        const contaEncontrada = this.banco.procurarConta(acc_n);
        if (contaEncontrada instanceof ContaCorrente || ContaPoupanca) {
            this.banco.remover(contaEncontrada);
        }
        else {
            console.log("\nConta Inexistente. Por favor, tente novamente.\n");
        }
    }
    gerarRelatorio() {
        this.banco.mostrarDados();
    }
}
const execution = new Execute();
let option = "";
do {
    const opcao = await inquirer.prompt([
        {
            name: "menu",
            type: "rawlist",
            message: "Escolha sua opção: ",
            choices: [
                "Criar Conta",
                "Selecionar Conta",
                "Remover Conta",
                "Gerar Relatório",
                "Finalizar",
            ],
        },
    ]);
    switch (opcao.menu) {
        case "Criar Conta":
            await execution.criarConta();
            break;
        case "Selecionar Conta":
            await execution.selecionarConta();
            break;
        case "Remover Conta":
            await execution.removerConta();
            break;
        case "Gerar Relatório":
            execution.gerarRelatorio();
            break;
        case "Finalizar":
            console.log("\nSaindo do sistema...\n");
            break;
        default:
            console.log("\nEssa opção não existe!\n");
            break;
    }
    option = opcao.menu;
} while (option != "Finalizar");
