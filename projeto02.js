const prompt = require("prompt-sync")();
console.clear();

//                  ### Projeto JOKENPÔ ###

const jokenpo = ['pedra', 'papel', 'tesoura'];
let pontos1 = 0
let pontos2 = 0



while(true){
    console.log(`Você deve escolher uma opção, essa escolha será feita através de números:
    0 - pedra
    1 - papel
    2 - tesoura.`); // Para que o jogador faça a escolha dele  
    let escolha = +prompt('Escolha uma opção: ') // O número escolhido será usado como o índice do array
    console.log(`Você escolheu ${jokenpo[escolha]}`)

    console.log(`A máquina escolheu `)    
    
    console.log(`O placar é de: 
    você: ${pontos1}
    Máquina: ${pontos2}`)
    let sair = prompt('Deseja continuar jogando? ');
    if(sair == 'nao'){
        break;
    }

}