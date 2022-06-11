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
    if (jogo[0][0] == 'X' && jogo[0][1] == 'X' && jogo[0][2] == 'X') {
        return true;
    } else if (jogo[1][0] == 'X' && jogo[1][1] == 'X' && jogo[1][2] == 'X') {
        return true;
    } else if (jogo[2][0] == 'X' && jogo[2][1] == 'X' && jogo[2][2] == 'X') {
        return true;
    } else if (jogo[0][0] == 'X' && jogo[1][0] == 'X' && jogo[1][0] == 'X') {
        return true;
    } else if (jogo[0][1] == 'X' && jogo[1][1] == 'X' && jogo[2][1] == 'X') {
        return true;
    } else if (jogo[0][2] == 'X' && jogo[1][2] == 'X' && jogo[2][2] == 'X') {
        return true;
    } else if (jogo[0][0] == 'X' && jogo[1][1] == 'X' && jogo[2][2] == 'X') {
        return true;
    } else if (jogo[1][0] == 'X' && jogo[1][1] == 'X' && jogo[1][2] == 'X') {
        return true;
    } else if (jogo[0][0] == 'O' && jogo[0][1] == 'O' && jogo[0][2] == 'O') {
        return true;
    } else if (jogo[1][0] == 'O' && jogo[1][1] == 'O' && jogo[1][2] == 'O') {
        return true;
    } else if (jogo[2][0] == 'O' && jogo[2][1] == 'O' && jogo[2][2] == 'O') {
        return true;
    } else if (jogo[0][0] == 'O' && jogo[1][0] == 'O' && jogo[1][0] == 'O') {
        return true;
    } else if (jogo[0][1] == 'O' && jogo[1][1] == 'O' && jogo[2][1] == 'O') {
        return true;
    } else if (jogo[0][2] == 'O' && jogo[1][2] == 'O' && jogo[2][2] == 'O') {
        return true;
    } else if (jogo[0][0] == 'O' && jogo[1][1] == 'O' && jogo[2][2] == 'O') {
        return true;
    } else if (jogo[1][0] == 'O' && jogo[1][1] == 'O' && jogo[1][2] == 'O') {
        return true;
    } else {
        return false;
    }
}
let venceu = verificarVitoria(matriz);

console.log(`Agora irei explicar como funcionará nosso jogo, por gentileza, preste bastante atenção:
    Os palpites serão dados através de coordenadas, conforme o exemplo abaixo
            coluna 0    conluna 1   coluna2
    linha 0    [0][0]       [0][1]      [0][1]
    linha 1    [1][0]       [1][1]      [1][2]
    linha 2    [2][0]       [2][1]      [2][2]`);
    console.log('Vamos começar o nosso jogo.');
    prompt('Tecle enter quando estiverem preparados.');
JogoCompleto : while(true){
    matriz = [ 
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
        ]
    
    // console.log(rodada)
    console.log('Vamos à ', rodada + 1,'ª rodada');
    if(rodada % 2 == 0){
        console.log();
        console.log(jogador1);
        let esclin1 = +prompt('Escolha a linha: ');
        while(esclin1 != 0 && esclin1 != 1 && esclin1 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin1 = +prompt('Escolha a linha: ');
        }
        let esccol1 = +prompt('Escolha a coluna: ');
        while(esccol1 != 0 && esccol1 != 1 && esccol1 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol1 = +prompt('Escolha a linha: ');
        }
        matriz[esclin1][esccol1] = 'X';
        console.log();
        // for (let i of matriz){
        //     console.log(i);
        // }
        console.table(matriz);
        console.log();
        // Outro jogador
        console.log(jogador2);
        let esclin2 = +prompt('Escolha a linha: ');
        while(esclin2 != 0 && esclin2 != 1 && esclin2 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin2 = +prompt('Escolha a linha: ');
        }
        let esccol2 = +prompt('Escolha a coluna: ');
        while(esccol2 != 0 && esccol2 != 1 && esccol2 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol2 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin2][esccol2] == 'X' ||
            matriz[esclin2][esccol2] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin2][esccol2] = 'O';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin3 = +prompt('Escolha a linha: ');
        while(esclin3 != 0 && esclin3 != 1 && esclin3 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin3 = +prompt('Escolha a linha: ');
        }
        let esccol3 = +prompt('Escolha a coluna: ');
        while(esccol3 != 0 && esccol3 != 1 && esccol3 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol3 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin3][esccol3] == 'X' || 
            matriz[esclin3][esccol3] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin3][esccol3] = 'X';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin4 = +prompt('Escolha a linha: ');
        while(esclin4 != 0 && esclin4 != 1 && esclin4 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin4 = +prompt('Escolha a linha: ');
        }
        let esccol4 = +prompt('Escolha a coluna: ');
        while(esccol4 != 0 && esccol4 != 1 && esccol4 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol4 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin4][esccol4] == 'X' || 
            matriz[esclin4][esccol4] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin4][esccol4] = 'O';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin5 = +prompt('Escolha a linha: ');
        while(esclin5 != 0 && esclin5 != 1 && esclin5 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin5 = +prompt('Escolha a linha: ');
        }
        let esccol5 = +prompt('Escolha a coluna: ');
        while(esccol5 != 0 && esccol5 != 1 && esccol5 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol5 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin5][esccol5] == 'X' || 
            matriz[esclin5][esccol5] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin5][esccol5] = 'X';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador1}!`);
            pontosJ1++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin6 = +prompt('Escolha a linha: ');
        while(esclin6 != 0 && esclin6 != 1 && esclin6 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin6 = +prompt('Escolha a linha: ');
        }
        let esccol6 = +prompt('Escolha a coluna: ');
        while(esccol6 != 0 && esccol6 != 1 && esccol6 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol6 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin6][esccol6] == 'X' || 
            matriz[esclin6][esccol6] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin6][esccol6] = 'O';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador2}!`);
            pontosJ2++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin7 = +prompt('Escolha a linha: ');
        while(esclin7 != 0 && esclin7 != 1 && esclin7 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin7 = +prompt('Escolha a linha: ');
        }
        let esccol7 = +prompt('Escolha a coluna: ');
        while(esccol7 != 0 && esccol7 != 1 && esccol7 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol7 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin7][esccol7] == 'X' || 
            matriz[esclin7][esccol7] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin7][esccol7] = 'X';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador1}!`);
            pontosJ1++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin8 = +prompt('Escolha a linha: ');
        while(esclin8 != 0 && esclin8 != 1 && esclin8 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin8 = +prompt('Escolha a linha: ');
        }
        let esccol8 = +prompt('Escolha a coluna: ');
        while(esccol8 != 0 && esccol8 != 1 && esccol8 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol8 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin8][esccol8] == 'X' || 
            matriz[esclin8][esccol8] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin8][esccol8] = 'O';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador2}!`);
            pontosJ2++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin9 = +prompt('Escolha a linha: ');
        while(esclin9 != 0 && esclin9 != 1 && esclin9 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin9 = +prompt('Escolha a linha: ');
        }
        let esccol9 = +prompt('Escolha a coluna: ');
        while (matriz[esclin9][esccol9] == 'X' || 
            matriz[esclin9][esccol9] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin9][esccol9] = 'X';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador1}!`);
            pontosJ1++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        } else {
            rodada++
            console.log('Vish, essa rodada deu velha!')
        }
    } else {
        
        // ################### PARA QUE O JOGO FIQUE BALANCEADO E CADA VEZ UM JOGADOR INICIE A RODADA
        
        console.log();
        console.log(jogador2);
        let esclin1 = +prompt('Escolha a linha: ');
        while(esclin1 != 0 && esclin1 != 1 && esclin1 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin1 = +prompt('Escolha a linha: ');
        }
        let esccol1 = +prompt('Escolha a coluna: ');
        while(esccol1 != 0 && esccol1 != 1 && esccol1 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol1 = +prompt('Escolha a linha: ');
        }
        matriz[esclin1][esccol1] = 'O';
        console.log();
        // for (let i of matriz){
        //     console.log(i);
        // }
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin2 = +prompt('Escolha a linha: ');
        while(esclin2 != 0 && esclin2 != 1 && esclin2 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin2 = +prompt('Escolha a linha: ');
        }
        let esccol2 = +prompt('Escolha a coluna: ');
        while(esccol2 != 0 && esccol2 != 1 && esccol2 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol2 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin2][esccol2] == 'X' ||
            matriz[esclin2][esccol2] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin2][esccol2] = 'X';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin3 = +prompt('Escolha a linha: ');
        while(esclin3 != 0 && esclin3 != 1 && esclin3 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin3 = +prompt('Escolha a linha: ');
        }
        let esccol3 = +prompt('Escolha a coluna: ');
        while(esccol3 != 0 && esccol3 != 1 && esccol3 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol3 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin3][esccol3] == 'X' || 
            matriz[esclin3][esccol3] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin3][esccol3] = 'O';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin4 = +prompt('Escolha a linha: ');
        while(esclin4 != 0 && esclin4 != 1 && esclin4 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin4 = +prompt('Escolha a linha: ');
        }
        let esccol4 = +prompt('Escolha a coluna: ');
        while(esccol4 != 0 && esccol4 != 1 && esccol4 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol4 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin4][esccol4] == 'X' || 
            matriz[esclin4][esccol4] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin4][esccol4] = 'X';
        console.log();
        console.table(matriz);
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin5 = +prompt('Escolha a linha: ');
        while(esclin5 != 0 && esclin5 != 1 && esclin5 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin5 = +prompt('Escolha a linha: ');
        }
        let esccol5 = +prompt('Escolha a coluna: ');
        while(esccol5 != 0 && esccol5 != 1 && esccol5 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol5 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin5][esccol5] == 'X' || 
            matriz[esclin5][esccol5] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin5][esccol5] = 'O';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador2}!`);
            pontosJ2++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin6 = +prompt('Escolha a linha: ');
        while(esclin6 != 0 && esclin6 != 1 && esclin6 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin6 = +prompt('Escolha a linha: ');
        }
        let esccol6 = +prompt('Escolha a coluna: ');
        while(esccol6 != 0 && esccol6 != 1 && esccol6 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol6 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin6][esccol6] == 'X' || 
            matriz[esclin6][esccol6] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin6][esccol6] = 'X';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador1}!`);
            pontosJ1++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin7 = +prompt('Escolha a linha: ');
        while(esclin7 != 0 && esclin7 != 1 && esclin7 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin7 = +prompt('Escolha a linha: ');
        }
        let esccol7 = +prompt('Escolha a coluna: ');
        while(esccol7 != 0 && esccol7 != 1 && esccol7 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol7 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin7][esccol7] == 'X' || 
            matriz[esclin7][esccol7] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin7][esccol7] = 'O';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador2}!`);
            pontosJ2++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador1);
        let esclin8 = +prompt('Escolha a linha: ');
        while(esclin8 != 0 && esclin8 != 1 && esclin8 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin8 = +prompt('Escolha a linha: ');
        }
        let esccol8 = +prompt('Escolha a coluna: ');
        while(esccol8 != 0 && esccol8 != 1 && esccol8 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esccol8 = +prompt('Escolha a linha: ');
        }
        while (matriz[esclin8][esccol8] == 'X' || 
            matriz[esclin8][esccol8] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin8][esccol8] = 'X';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador1}!`);
            pontosJ1++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        }
        // Outro jogador
        console.log();
        console.log(jogador2);
        let esclin9 = +prompt('Escolha a linha: ');
        while(esclin9 != 0 && esclin9 != 1 && esclin9 != 2){
            console.log('Essa opção não faz parte de nenhuma coordenada')
            esclin9 = +prompt('Escolha a linha: ');
        }
        let esccol9 = +prompt('Escolha a coluna: ');
        while (matriz[esclin9][esccol9] == 'X' || 
            matriz[esclin9][esccol9] == 'O'){
            console.log();
            console.log('Este lugar já foi escolhido, escolha outro: ');
            esclin2 = +prompt('Escolha a linha: ');
            esccol2 = +prompt('Escolha a coluna: ');
        }
        console.clear();
        matriz[esclin9][esccol9] = 'O';
        console.log();
        console.table(matriz);
        venceu = verificarVitoria(matriz);
        if(venceu == true){
            console.log(`O vencedor dessa rodada foi ${jogador2}!`);
            pontosJ2++
            console.log('Desejam continuar jogando?');
            console.log('[1] Sim');
            console.log('[2] Não');
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                continuar = +prompt('Por favor digite 1 para Sim ou 2 para Não:');
            }
            if (continuar == 1){
                rodada++
                continue JogoCompleto;
            } else {
                break;
            }
        } else {
            rodada++
            console.log('Vish, essa rodada deu velha!')
        }
    }
}
console.log('O placar final é:');
console.log(`${jogador1} fez ${pontosJ1} pontos`);
console.log(`${jogador2} fez ${pontosJ2} pontos`);
console.log();
if (pontosJ1 > pontosJ2){
    console.log(`O grande vencedor deste desafio foi ${jogador1}`)
} else if (pontosJ2 > pontosJ1) {
    console.log(`O grande vencedor deste desafio foi ${jogador2}`)
} else {
    console.log('Os dois fizeram a mesma quantidade de pontos, o duelo terminou empatado!')
}