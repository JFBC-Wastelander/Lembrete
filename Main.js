const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Bemvindo() {
    console.log(`
Bem vindo ao seu lembrete
1 - Criar um lembrete
2 - Exibir Lembretes
3 - Atualizar Lembretes
4 - Deletar Lembretes
5 - Sair`)
}

Bemvindo()
rl.on('line', (input) =>{

    switch (input) {
        case '1':

            break;

        case '2':

            break;

        case '3':

            break;

        case '4':

            break;

        case '5':

            break;


        default:

        
            break;
    }

});