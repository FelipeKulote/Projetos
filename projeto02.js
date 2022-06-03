const prompt = require("prompt-sync")();
console.clear();

//                  ### Projeto JOKENPÔ ###

const jokenpo = ['pedra', 'papel', 'tesoura'];
let pontosJ = 0
let pontosM = 0

// let opcao = +prompt(`Escolha uma opção: 
// 1: Jogar com um número de rodadas pré-estabelecido.
// 2: Jogar por um número indeterminado de rodadas.`)

// if (opcao == 1){
    let rodadas = +prompt('Quantas rodadas serão jogadas? ')
    for(let i = 0; i < rodadas; i++){
        console.log('Vamos à rodada ', i + 1,'!');
        console.log();
        console.log(`Você deve escolher uma opção, essa escolha será feita através de números:
        1 - pedra
        2 - papel
        3 - tesoura.`); // Para que o jogador faça a escolha dele  
        let escolha = +prompt('Escolha uma opção: ') // O número escolhido será usado como o índice do array
        console.log();
        console.log(`Você escolheu ${jokenpo[escolha-1]}`);
        console.log();
        let maquina  = Math.floor(Math.random() * 3)
        console.log(`A máquina escolheu ${jokenpo[maquina]}`);   
        console.log();

        if (jokenpo[escolha-1] == 'pedra'){
            if (jokenpo[maquina] == 'pedra'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'tesoura'){
                console.log('Você ganhou!')
                pontosJ++
            } else { 
                console.log('Você perdeu!')
                pontosM++ 
            }
        }
        else if (jokenpo[escolha-1] == 'papel'){
            if (jokenpo[maquina] == 'papel'){
                console.log('Empate!');
            }
            else if (jokenpo[maquina] == 'pedra'){
                console.log('Você ganhou!')
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
                console.log('Você perdeu!')
                pontosM++
            }
        }
        console.log();
        console.log(`O placar é de: 
        você: ${pontosJ}
        Máquina: ${pontosM}`);
        console.log();
    }
// } else while (true){
//     let x = 0
//     console.log('Vamos a rodada ', x + 1,'!')

// }



// let sair = prompt('Deseja continuar jogando? ');
//     if(sair == 'nao'){
//         break;
//     }