const prompt = require("prompt-sync")();
console.clear();

/*
Criação da Matriz de duas dimensões. (1,0) (OK)
Solicitar coordenadas aos jogadores. (1,0) (OK)
Laço de repetição que determinará se os jogadores querem continuar o jogo ou não. (2,0) (OK)
Variável para controle do vencedor de cada rodada. (2,0) (OK)
Mostrar o resultado e quem foi o grande vencedor. (2,0) (OK)
Conteúdo de variáveis, arrays, matrizes, condicionais e laços bem aplicados. (2,0) (OK)

                #### JOGO DA VELHA ####

Faça um "jogo da velha" criando uma matriz em duas dimensões 
(Você deve criar um array com 3 arrays de 3 elementos cada dentro). 
O programa deve pedir as coordenadas (linha e coluna) alternadamente 
para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, 
ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu 
aquela rodada, se os jogadores desejarem parar, o programa deve mostrar 
quem ganhou mais rodadas e quem é o grande vencedor.
*/

let matriz = [ 
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ]

console.log('Olá, bem vindo ao nosso jogo.');
console.log(`Iremos jogar agora um jogo da velha, este jogo precisa de dois jogadores então, 
por gentileza, insira os nomes dos participantes`);
let jogador1 = prompt('Jogador 1: ');
let jogador2 = prompt('Jogador 2: ');
let pontosJ1 = 0;
let pontosJ2 = 0;
let rodada = 0;
let continuar = 0;

function verificarVitoria(jogo){
    for (let i = 0; i < 3; i++) {
        if ((jogo[i][0] == jogo[i][1]) && (jogo[i][1] == jogo[i][2]) && (jogo[i][0] != ' ')) {
            return true;
        } else if ((jogo[0][i] == jogo[1][i]) && (jogo[1][i] == jogo[2][i]) && (jogo[0][i] != ' ')) {
            return true;
        }
    }
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2]) && (jogo[0][0] != ' ')) {
        return true;
    } else if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0]) && (jogo[0][2] != ' ')){
        return true;
    }
}
let venceu = verificarVitoria(matriz);

console.log(`Agora irei explicar como funcionará nosso jogo, por gentileza, preste bastante atenção:
    Os palpites serão dados através de coordenadas, conforme o exemplo abaixo
              coluna 0     conluna 1   coluna 2
    linha 0    [0][0]       [0][1]      [0][1]
    linha 1    [1][0]       [1][1]      [1][2]
    linha 2    [2][0]       [2][1]      [2][2]`);
    console.log('Vamos começar o nosso jogo.');
    prompt('Tecle [ENTER] quando estiverem preparados.');
JogoCompleto : while(true){
    matriz = [ 
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
        ];
    let jogadas = 0;
    console.log('Vamos à ', rodada + 1,'ª rodada');
    if(rodada % 2 == 0){
        while (true){
            console.table(matriz)
            console.log();
            console.log(jogador1);
            let esclin = +prompt('Escolha a linha: ');
            while(esclin != 0 && esclin != 1 && esclin != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esclin = +prompt('Escolha a linha: ');
            }
            let esccol = +prompt('Escolha a coluna: ');
            while(esccol != 0 && esccol != 1 && esccol != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esccol = +prompt('Escolha a linha: ');
            }
            while (matriz[esclin][esccol] == 'X' || 
                matriz[esclin][esccol] == 'O'){
                console.log();
                console.log('Este lugar já foi escolhido, escolha outro: ');
                esclin = +prompt('Escolha a linha: ');
                esccol = +prompt('Escolha a coluna: ');
            }
            console.clear();
            matriz[esclin][esccol] = 'X';
            console.log();
            console.table(matriz);
            jogadas++
            venceu = verificarVitoria(matriz);
            if(venceu == true){
                console.log(`O vencedor dessa rodada foi ${jogador1}!`);
                pontosJ1++
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            } else if (jogadas == 9){
                console.log('Essa rodada deu empate.')
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            }
            // Outro jogador
            console.log();
            console.log(jogador2);
            esclin = +prompt('Escolha a linha: ');
            while(esclin != 0 && esclin != 1 && esclin != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esclin = +prompt('Escolha a linha: ');
            }
            esccol = +prompt('Escolha a coluna: ');
            while(esccol != 0 && esccol != 1 && esccol != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esccol = +prompt('Escolha a linha: ');
            }
            while (matriz[esclin][esccol] == 'X' || 
                matriz[esclin][esccol] == 'O'){
                console.log();
                console.log('Este lugar já foi escolhido, escolha outro: ');
                esclin = +prompt('Escolha a linha: ');
                esccol = +prompt('Escolha a coluna: ');
            }
            console.clear();
            matriz[esclin][esccol] = 'O';
            console.log();
            console.table(matriz);
            jogadas++
            venceu = verificarVitoria(matriz);
            if(venceu == true){
                console.log(`O vencedor dessa rodada foi ${jogador2}!`);
                pontosJ2++
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            }
        }
    } else { // Para que o jogo fique balanceado e cada rodada seja um começada por um jogador diferente
        while (true){
            console.table(matriz)
            console.log();
            console.log(jogador2);
            let esclin = +prompt('Escolha a linha: ');
            while(esclin != 0 && esclin != 1 && esclin != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esclin = +prompt('Escolha a linha: ');
            }
            let esccol = +prompt('Escolha a coluna: ');
            while(esccol != 0 && esccol != 1 && esccol != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esccol = +prompt('Escolha a linha: ');
            }
            while (matriz[esclin][esccol] == 'X' || 
                matriz[esclin][esccol] == 'O'){
                console.log();
                console.log('Este lugar já foi escolhido, escolha outro: ');
                esclin = +prompt('Escolha a linha: ');
                esccol = +prompt('Escolha a coluna: ');
            }
            console.clear();
            matriz[esclin][esccol] = 'O';
            console.log();
            console.table(matriz);
            jogadas++
            venceu = verificarVitoria(matriz);
            if(venceu == true){
                console.log(`O vencedor dessa rodada foi ${jogador2}!`);
                pontosJ2++
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            } else if (jogadas == 9){
                console.log('Essa rodada deu empate.')
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            }
            // Outro jogador
            console.log();
            console.log(jogador1);
            esclin = +prompt('Escolha a linha: ');
            while(esclin != 0 && esclin != 1 && esclin != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esclin = +prompt('Escolha a linha: ');
            }
            esccol = +prompt('Escolha a coluna: ');
            while(esccol != 0 && esccol != 1 && esccol != 2){
                console.log('Essa opção não faz parte de nenhuma coordenada')
                esccol = +prompt('Escolha a linha: ');
            }
            while (matriz[esclin][esccol] == 'X' || 
                matriz[esclin][esccol] == 'O'){
                console.log();
                console.log('Este lugar já foi escolhido, escolha outro: ');
                esclin = +prompt('Escolha a linha: ');
                esccol = +prompt('Escolha a coluna: ');
            }
            console.clear();
            matriz[esclin][esccol] = 'X';
            console.log();
            console.table(matriz);
            jogadas++
            venceu = verificarVitoria(matriz);
            if(venceu == true){
                console.log(`O vencedor dessa rodada foi ${jogador1}!`);
                pontosJ1++
                console.log('Desejam continuar jogando?');
                console.log('[1] Sim');
                console.log('[2] Não');
                continuar = +prompt();
                while (continuar != 1 && continuar != 2){
                    continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não: ');
                }
                if (continuar == 1){
                    rodada++
                    continue JogoCompleto;
                } else {
                    break JogoCompleto;
                }
            }
        }
    }
}
console.log();
console.log('O placar final é:');
console.log(`${jogador1} fez ${pontosJ1} pontos`);
console.log(`${jogador2} fez ${pontosJ2} pontos`);
console.log();
if (pontosJ1 > pontosJ2){
    console.log(`O grande vencedor deste desafio foi ${jogador1}`);
} else if (pontosJ2 > pontosJ1) {
    console.log(`O grande vencedor deste desafio foi ${jogador2}`);
} else {
    console.log('Os dois fizeram a mesma quantidade de pontos, o duelo terminou empatado!');
}