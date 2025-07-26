const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

function Bemvindo() {
  console.log(`
Bem vindo ao seu lembrete
1 - Criar um lembrete
2 - Exibir Lembretes
3 - Atualizar Lembretes
4 - Deletar Lembretes
5 - Marcar como concluido
6 - Sair`);
}

Bemvindo();
rl.on("line", (input) => {
  switch (input) {
    case "1":
      criar();
      break;

    case "2":
      exibir();
      break;

    case "3":
      atualizar();
      break;

    case "4":
      deletar();
      break;

    case "5":
      concluido();
      break;

    case "6":
      console.log("Saindo . . .");
      process.exit();

    default:
      console.log("Escreva corretamente");
      Bemvindo();
      break;
  }
});

function criar() {
  rl.question("Qual lembrete deseja criar ? ", (lembrete) => {
    rl.question("Qual a data do seu lembrete ? ", (data) => {
      rl.question("Qual o Andamento: ", (andamento) => {
        const lembretes = {
          lembrete,
          data,
          andamento,
        };
        array.push(lembretes);
        console.log("Lembrete criado com sucesso");
        Bemvindo();
      });
    });
  });
}

function exibir() {
  array.forEach((a, i) => {
    console.log(`${i + 1} - ${a.lembrete}, ${a.data}, ${a.andamento}`);
  });
  Bemvindo();
}

function atualizar() {
  array.forEach((a, i) => {
    console.log(`${i + 1} - ${a.lembrete}, ${a.data}, ${a.andamento}`);
  });
  rl.question("Qual lembrete deseja alterar? ", (inputEditar) => {
    let numero = inputEditar - 1;
    rl.question("Qual o novo lembrete ? ", (lembrete) => {
      rl.question("Qual a data do seu lembrete ? ", (data) => {
        rl.question(" Qual o Andamento: ", (andamento) => {
          array[numero] = {
            lembrete,
            data,
            andamento,
          };
          console.log("Seu lembrete foi atualizado com sucesso! ");
          Bemvindo();
        });
      });
    });
  });
}

function deletar() {
  array.forEach((a, i) => {
    console.log(`${i + 1} - ${a.lembrete}, ${a.data}, ${a.andamento}`);
  });
  rl.question("Qual lembrete deseja deletar ?", (input) => {
    let numero = input - 1;
    array.splice(numero, 1);
    console.log("Lembrete deletado com sucesso");
  });
  Bemvindo();
}

function concluido() {

  if (array.length === 0) {
    console.log("Você não tem lembretes para concluir.")
    Bemvindo()
  }
  console.log("====== Lembretes para concluir ======")
  array.forEach((a, i) => {
    console.log(`${i + 1} - ${a.lembrete}, ${a.data}, ${a.andamento}`);
  });

  rl.question("Qual lembrete deseja marcar como concluido?", (concluir) => {
    const index = parseInt(concluir) - 1

    array[index].andamento = "Conluido"
    console.log("O lembrete foi concluido!")
    Bemvindo()
  } )
  
}