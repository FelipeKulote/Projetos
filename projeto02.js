const prompt = require("prompt-sync")();
console.clear();

//                  ### Projeto JOKENPÔ ###

const jokenpo = ['pedra', 'papel', 'tesoura'];
let pontosJ = 0
let pontosM = 0
let r = 0

/* aqui o jogador vai decidir em qual estrutura de repetição irá fazer o jogo,
caso responda 1 cairá como 'for' então ele definirá quantas rodadas serão jogadas;
caso responda 2 cairá como 'while' então ele poderá fazer quantas rodadas quiser 
e sair quando for perguntado se deseja continuar ou não.
*/
console.log(`Escolha uma opção: 
1- Ecolher a quantidade de rodadas que vou jogar.
2- Jogar sem quantidade definida de rodadas.`);
let opcao = +prompt(); 
// while para que o jogador não digite algo diferente do que eu quero como resposta
while (opcao != 1 && opcao != 2){
    console.log('Por favor escolha uma das opções.');
    console.log(`Escolha uma opção: 
1- Ecolher a quantidade de rodadas que vou jogar.
2- Jogar sem quantidade definida de rodadas.`); 
    opcao = +prompt();
}
if (opcao === 1){
    let rodadas = +prompt('Quantas rodadas serão jogadas? ');
    for(let i = 0; i < rodadas; i++){
        console.log('Vamos à rodada ', i + 1,'!');
        console.log(); // Espaço entre as mensagens
        console.log(`Você deve escolher uma opção, essa escolha será feita através de números:
        1 - pedra
        2 - papel
        3 - tesoura.`); // Para que o jogador faça a escolha dele  
        let escolha = +prompt('Escolha uma opção: ') // O número escolhido será usado como o índice do array
        while(escolha != 1 && escolha != 2 && escolha != 3){
            console.log('Escolha uma das opções!')
            escolha = +prompt();
        }
        console.log(); // Espaço entre as mensagens
        console.log(`Você escolheu ${jokenpo[escolha-1]}`);
        console.log(); // Espaço entre as mensagens
        let maquina  = Math.floor(Math.random() * 3) // A escolha para a máquina será aleatória
        console.log(`A máquina escolheu ${jokenpo[maquina]}`);   
        console.log(); // Espaço entre as mensagens

        if (jokenpo[escolha-1] == 'pedra'){
            if (jokenpo[maquina] == 'pedra'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'tesoura'){
                console.log('Você ganhou!');
                pontosJ++
            } else { 
                console.log('Você perdeu!');
                pontosM++ 
            }
        }
        else if (jokenpo[escolha-1] == 'papel'){
            if (jokenpo[maquina] == 'papel'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'pedra'){
                console.log('Você ganhou!');
                pontosJ++
            } else {
                console.log('Você perdeu!');
                pontosM++
            }
        }
        else {
            if (jokenpo[maquina] == 'tesoura'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'papel'){
                console.log('Você ganhou!');
                pontosJ++
            } else {
                console.log('Você perdeu!');
                pontosM++
            }
        }
        console.log(); // Espaço entre as mensagens
        console.log(`O placar é de: 
        você: ${pontosJ}
        Máquina: ${pontosM}`);
        console.log(); // Espaço entre as mensagens
        prompt('Digite algo para continuar: ');
        console.log(); // Espaço entre as mensagens
    }
    if(pontosJ > pontosM){
        console.log('PARABÉNS, VOCÊ FOI O VENCEDOR DESSE EMOCIONANTE DUELO!!');
    } else if (pontosM > pontosJ){
        console.log('VISH.. NÃO DEU PRA VOCÊ DESTA VEZ!! (CÁ ENTRE NÓS, EU ACHO QUE ESSA IA ROUBA)');
    } else {
        console.log('UÉ.. EMPATOU?! REALMENTE, VOCÊS TERMINARAM COM A MESMA QUANTIDADE DE PONTOS.');
    }
} else {
    while (true) {
        console.log('Vamos à rodada ', r + 1,'!');
        console.log(); // Espaço entre as mensagens
        console.log(`Você deve escolher uma opção, essa escolha será feita através de números:
        1 - pedra
        2 - papel
        3 - tesoura.`); // Para que o jogador faça a escolha dele  
        let escolha = +prompt('Escolha uma opção: '); // O número escolhido será usado como o índice do array
        while(escolha != 1 && escolha != 2 && escolha != 3){
            console.log('Escolha uma das opções!')
            escolha = +prompt();
        }
        console.log(); // Espaço entre as mensagens
        console.log(`Você escolheu ${jokenpo[escolha-1]}`);
        console.log(); // Espaço entre as mensagens
        let maquina  = Math.floor(Math.random() * 3) // A escolha para a máquina será aleatória
        console.log(`A máquina escolheu ${jokenpo[maquina]}`);   
        console.log(); // Espaço entre as mensagens

        if (jokenpo[escolha-1] == 'pedra'){
            if (jokenpo[maquina] == 'pedra'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'tesoura'){
                console.log('Você ganhou!');
                pontosJ++
            } else { 
                console.log('Você perdeu!');
                pontosM++ 
            }
        }
        else if (jokenpo[escolha-1] == 'papel'){
            if (jokenpo[maquina] == 'papel'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'pedra'){
                console.log('Você ganhou!');
                pontosJ++
            } else {
                console.log('Você perdeu!');
                pontosM++
            }
        }
        else {
            if (jokenpo[maquina] == 'tesoura'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'papel'){
                console.log('Você ganhou!');
                pontosJ++
            } else {
                console.log('Você perdeu!');
                pontosM++
            }
        }
        console.log();
        console.log(`O placar é de: 
        você: ${pontosJ}
        Máquina: ${pontosM}`);
        console.log();
        r++
        let sair = prompt('Deseja continuar jogando? ');
        while(sair.toLowerCase() != 'sim' && sair.toLowerCase() != 'nao'){
            console.log('Responda com "sim" ou "nao"');
            sair = prompt('Deseja continuar jogando? ');
        }
        if (sair.toLowerCase() == 'nao'){
            if(pontosJ > pontosM){
                console.log('PARABÉNS, VOCÊ FOI O VENCEDOR DESSE EMOCIONANTE DUELO!!');
            } else if (pontosM > pontosJ){
                console.log('VISH.. NÃO DEU PRA VOCÊ DESTA VEZ!! (CÁ ENTRE NÓS, EU ACHO QUE ESSA IA ROUBA)');
            } else {
                console.log('UÉ.. EMPATOU?! REALMENTE, VOCÊS TERMINARAM COM A MESMA QUANTIDADE DE PONTOS.');
            }
            break;
        }
    } 
}