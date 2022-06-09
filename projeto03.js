const prompt = require("prompt-sync")();
console.clear();

/*              #### JOGO DA VELHA ####

Faça um "jogo da velha" criando uma matriz em duas dimensões 
(Você deve criar um array com 3 arrays de 3 elementos cada dentro). 
O programa deve pedir as coordenadas (linha e coluna) alternadamente 
para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, 
ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu 
aquela rodada, se os jogadores desejarem parar, o programa deve mostrar 
quem ganhou mais rodadas e quem é o grande vencedor.
*/

/*
function verificarVitoria(a){
    //LINHAS
    for (let i=0;i<3;i++) {
        if ((a[i][0] == a[i][1]) && (a[i][1] == a[i][2])) {
            console.log(a[i][0]);
            return 1;
        }
    }

    //COLUNAS
    for (let i=0;i<3;i++) {
        if ((a[0][i] == a[1][i]) && (a[1][i] == a[2][i])) {
            console.log(a[0][i]);
            return 1;
        }
    }

    //DIAGONAIS
    if ((a[0][0] == a[1][1]) && (a[1][1] == a[2][2])) {
        console.log(a[0][0]);
        return 1;
*/

const matriz = [ 
[' ',' ',' '],
[' ',' ',' '],
[' ',' ',' ']
]
// function validaEscolha(escolha)
//     while(escolha != 0 && escolha != 1 && escolha != 2){
//         console.log('Essa opção não faz parte de nenhuma coordenada')

//     }

console.log('Olá, bem vindo ao nosso jogo.');
console.log(`Iremos jogar agora um jogo da velha, este jogo precisa de dois jogadores então, 
por gentileza, insira os nomes dos participantes`);
// let jogador1 = prompt('Jogador 1: ');
// let jogador2 = prompt('Jogador 2: ');
let pontosJ1 = 0;
let pontosJ2 = 0;
let rodada = 0;


console.log(`Agora irei explicar como funcionará nosso jogo, por gentileza, preste bastante atenção:
Os palpites serão dados através de coordenadas, conforme o exemplo abaixo
           coluna 0    conluna 1   coluna2
linha 0    [0][0]       [0][1]      [0][1]
linha 1    [1][0]       [1][1]      [1][2]
linha 2    [2][0]       [2][1]      [2][2]`);
console.log('Vamos começar o nosso jogo.');
// console.log('vamos sempre alternar o jogador que irá começar a rodada.');
prompt('Está preparado? ');
console.clear();
console.log('Vamos à ', rodada + 1,'ª rodada');
console.log();
console.log('Jogador 1');
let esclin1 = +prompt('Escolha a linha: ');
while(esclin1 != 0 && esclin1 != 1 && esclin1 != 2){
    console.log('Essa opção não faz parte de nenhuma coordenada')
    esclin1 = +prompt('Escolha a linha: ');
}
let esccol1 = +prompt('Escolha a coluna: ');
matriz[esclin1][esccol1] = 'X';
console.log();
// for (let i of matriz){
//     console.log(i);
// }
console.table(matriz);
console.log();
console.log('Jogador 2');
let esclin2 = +prompt('Escolha a linha: ');
let esccol2 = +prompt('Escolha a coluna: ');
while (matriz[esclin2][esccol2] == matriz[esclin1][esccol1]){
    console.log();
    console.log('Este lugar já foi escolhido, escolha outro: ');
    esclin2 = +prompt('Escolha a linha: ');
    esccol2 = +prompt('Escolha a coluna: ');
}
console.clear();
matriz[esclin2][esccol2] = 'O';
console.log();
// for (let i of matriz){
//     console.log(i);
// }
console.table(matriz);
console.log();
console.log('Jogador 1');
let esclin3 = +prompt('Escolha a linha: ');
let esccol3 = +prompt('Escolha a coluna: ');
while (matriz[esclin3][esccol3] == matriz[esclin1][esccol1] && 
    matriz[esclin3][esccol3] == matriz[esclin2][esccol2]){
    console.log();
    console.log('Este lugar já foi escolhido, escolha outro: ');
    esclin2 = +prompt('Escolha a linha: ');
    esccol2 = +prompt('Escolha a coluna: ');
}
console.clear();
matriz[esclin3][esccol3] = 'X';
console.log();
// for (let i of matriz){
//     console.log(i);
// }
console.table(matriz);
