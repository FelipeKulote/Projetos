const prompt = require("prompt-sync")();
console.clear();

/*
Seu projeto já deve estar ganhando forma e com algumas funções já incrementadas e funcionando:
Controle de status do personagem;
Condições que determinarão mudanças no status e variáveis de controle do jogo;
Um controle de passagem de tempo que determina o começo e o fim de cada ciclo.

Agora podemos começar a organizar tudo isso, e seria bom pensarmos em funções para 
executar cada uma das tarefas. Portanto para hoje nossos objetivos serão:
- Determinar quais funções serão usadas (Determinar fim do ciclo? Resetar os status 
do personagem? Fazer controle da passagem de tempo?);
- Determinar quais variáveis serão usadas e alteradas por elas;
- Implementar essas funções de maneira eficiente;

Com isso nosso projeto já deve estar bem encaminhado e com todas as funcionalidades 
implementadas e funcionando adequadamente. Veja o que você já tem e o que será possível 
ainda incrementar com o tempo restante.
*/



/* ######## BRAINSTORM PARA A HISTÓRIA

Uma pessoa que recebe um salário que mal dá para sobreviver e que provavelmente vai precisar
cometer alguns furtos/roubos para que consiga sobreviver e ter uma vida melhor.

Sua história começa em um dia qualquer, em que você vai trabalhar no seu emprego comum, 
no qual é claramente explorado por seu chefe, que nem sempre paga seu salário no dia correto
e que faz com que você faça todo tipo de serviço que aquele lugar precisa. Você sabe que todo 
seu esforço não é recompensado, mas vive o medo de sair do emprego e não conseguir outro que 
possa pagar seu aluguel e comida, então acaba se sujeitando a essa situação.

Você é uma pessoa simples que quase sempre segue a mesma rotina todos os dias, acorda se levanta
bem cedo e vai para o serviço, sem mais tanta paciência para aturar o babaca do seu chefe, que 
age como se fosse o rei do mundo.

Mas em um dia normal, um visitante que nunca fora visto naquele estabelecimento aparece, e 
de alguma ele atrai sua atenção, ele estava a mexer com alguns papéis, parecendo estar estudando
sobre algo. Você não consegue identificar um motivo específico pelo qual aquele sujeito te deixou 
curioso em conhecê-lo. Um sujeito muito discreto e diferente daquelas pessoas comuns desta cidade, 
usava uma roupa escura, sem tantos detalhes, parecia que não queria chamar tanta atenção.

(escolha entre ir conversar com ele ou não)

if (conversar){
    Olá, me desculpe interromper sua refeição, mas o senhor é novo por aqui? Nunca o vi por aqui.
    - O sujeito olha com uma cara estranha, como se dissesse que não queria ser incomodado -

    (insistir e tentar forçar uma amizade ou deixar o sujeito em paz)
    if (insistir){
        - O homem respira fundo e lhe cumprimenta e respondi que sim, mas não diz muito de si, 
        afinal não queria atrair olhares -
        E então os dois começam a convensar sobre coisas aleatórias, mas não por tanto tempo,
        afinal seu chefe estava de olho e poderia o reprimir a qualquer momento por não estar 
        trabalhando. (Não tocou no assunto dos papeis na mesa, já que o homem parecia não estar
        afim de falar sobre aquilo)
        personagem.aumentarmoral(10)

    } else (DEIXAR O SUJEITO EM PAZ) {
        Que rapaz estranho, mal encarado, melhor deixá-lo em paz.
        - Mas você continua curioso com aqueles papeis que ele estava olhando com tanta atenção -
    }
} 
else (NÃO CONVERSAR){
    Melhor não mexer com esse cara, não parece estar muito a fim de papo.
}

Você volta a fazer seu serviço afinal de contas, não quer que seu chefe te perturbe o resto do dia
gritando com você.

No fim do dia você recebe a diária do serviço e vai pra casa, insatisfeito com aquilo, pois o 
dinheiro mal daria para comprar a comida do dia e lembrou que o aluguel estava atrasado há algum
tempo.

(Comprar comida ou guardar para o aluguel)
if (COMIDA){
    fome++
} else (ALUGUEL)
    aluguel++

Um mercadinho com câmera 
Um mercadinho com segurança
um Banco com seguranças armados (se XP menor que um valor (ele é preso ou morre))

*/

let personagem = {
    nome: 'Felipe',
    saldo: 0,
    moral: 0,
    xp: 0,

    mudarSaldo: function(dinheiro){
        this.saldo += dinheiro;
        console.log('Você ganha: ', dinheiro,' R$')
    },
    aumentarMoral: function(moral){
        this.moral += moral;
        console.log(`Moral: ${this.moral}`)
    },
    aumentarXp: function(xp){
        this.xp += xp
        console.log(`Experiência: ${this.xp}`)
    }
}

let tempo = {
    dia: 1,
    hora: 08,
    minuto: 00,

    passarTempo: function(dia, hora, minuto){
        this.dia += dia;
        this.hora += hora;
        this.minuto += minuto;
        if (this.hora >= 24){
            this.dia++;
            this.hora -= 24;
        }
        if (this.minuto >= 60){
            this.hora++;
            this.minuto -= 60;
        }
        console.log(`===============================================
                Dia ${this.dia}º às ${this.hora}:${this.minuto}
===============================================`)
    }   
}

let resultado = 'livre';
let continuar = 0;
let chances = 5;

const lugaresAssalto = [
    '[1] Uma idosa na rua', 
    '[2] Um mercadinho de bairro', 
    '[3] Uma loja de jóias', 
    '[4] Um banco com pouco movimento', 
    '[5] O banco principal da cidade'
];
const ferramentas = [
    '[1] Nenhuma arma',
    '[2] Taco de basebol',
    '[3] Faca',
    '[4] Pistola',
    '[5] Fuzil AK47'
];

function primeiroAssalto(){
    let resultado = 'Livre'
    tempo.passarTempo(0, 0, 0);
    console.log('1º ASSALTO');
    console.log(`Javier: Agora você irá realizar seu primeiro assalto, deve controlar seu nervosismo
e pensar muito sobre o plano. Como você não tem tanta experiência, aconselho começar com uma coisa
simples, mas isso é você quem irá decidir, fique a vontade caso queira algo mais complexo, é você que
está correndo os riscos. Então vamos começar os preparativos.`);
    console.log();
    console.log(`Você tem ${personagem.xp} de experiência`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Primeiramente precisamos escolher o local que você irá começar, escolha uma das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.clear();
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. Eu tenho um bom estoque 
de armas e ferramentas, mas você só terá acesso a algumas: `);
    for (let i of ferramentas){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:')
    let escolhaArma = +prompt();
    while (escolhaArma < 1 || escolhaArma > 5){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.clear();
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar ${lugaresAssalto[escolhaLug - 1]}, 
com a arma ${ferramentas[escolhaArma - 1]}.`);
    console.log();
    console.log(`Para não me envolver com alguma suspeita nos encontraremos amanhã, no nosso esconderijo! 
                                    BOA SORTE!!`);
    tempo.passarTempo(0, 3, 30);
    console.log(`Ok. Tudo pronto, bora pro assalto.`);
    console.log();
    prompt('Tecle [ENTER] para ver o resultado da seu assalto');
    console.clear();
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100);
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (escolhaArma == 5){
            console.log('Você é louco? Achou que ninguém perceberia que você estava carregando um Fuzil no meio da rua?!')
            console.log('Você mereceu ser preso por essa idiotice.')
            resultado = 'Preso'
            return resultado;
        } else if (chance >= 5){
            console.log(`Você conseguiu assaltar a senhorinha com sucesso. Não foi tão difícil né?! 
Isso te da um pouco mais de experiência para os próximos assaltos.`);
            personagem.mudarSaldo(500);
            personagem.aumentarXp(10);
            personagem.aumentarMoral(2);
            resultado = 'Sucesso';
            return resultado;
            } else if (chance >= 3 && chance <= 4) {
            console.log('Você não conseguiu assaltá-la, mas conseguiu fugir sem que ninguém te pegasse.');
            resultado = 'Fugiu';
            return resultado;
        } else { 
            console.log(`Você deu azar, estava passando um policial bem na hora e 
conseguiu prendê-lo antes que roubasse a senhorinha.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 2){
        let chance = Math.ceil(Math.random()*100);
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 30){
            console.log(`Você conseguiu assaltar o mercadinho com sucesso. 
Para um primeiro assalto até que você não foi mal.`);
            personagem.mudarSaldo(2000);
            personagem.aumentarXp(20);
            personagem.aumentarMoral(5);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 20 && chance <= 29){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Você foi preso, não imaginava que a polícia chegaria tão rápido né?!`);
            resultado = 'Preso';
            return resultado;
            }
    } else if (escolhaLug == 3){
        let chance = Math.ceil(Math.random()*100);
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 60){
            console.log(`Isso foi bem arriscado, essas lojas possuem muitos sistemas de segurança.
Mas está de parabéns, foi um roubo muito bem planejado!`);
            personagem.mudarSaldo(10000);
            personagem.aumentarXp(30);
            personagem.aumentarMoral(10);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 50 && chance <= 59){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`A loja de joias sempre possuem maior segurança, infelizmente você foi pego pela polícia.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 4){
        let chance = Math.ceil(Math.random()*100);
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 75){
            console.log(`Não imaginei que você conseguiria esse feito. Não tem tanta segurança nesse lugar, mas nunca
é simples roubar um banco`);
            personagem.mudarSaldo(20000);
            personagem.aumentarXp(40);
            personagem.aumentarMoral(15);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance > 75 && chance <= 84){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Já era de se esperar, um iniciante tentando roubar um banco?! Se não for muito bem planejado
a prisão é certa.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 5){
        let chance = Math.ceil(Math.random()*100); 
        console.log(`Você fez ${chance} pontos nesse assalto.`);           
        if (escolhaArma == 2 || escolhaArma == 3){
            console.log(`Você está de brincadeira que você tentou assaltar o principal banco da cidade com ${ferramentas[escolhaArma - 1]}...
            
Francamente, eu esperava mais de você!`);
            resultado = 'Preso'
            return resultado
        } else if (chance >= 96){
            if (escolhaArma == 1){
                console.log(`Suas chances de cometer um furto no principal banco da cidade são mínimas sem a arma adequada.

Você deu sorte que não estava com nenhuma arma, então conseguiu fugir do banco sem tantas suspeitas.`);
            }
            console.log(`Você é maluco!! No seu primeiro roubo assaltar o maior banco da cidade?!
Mas gostei da sua ousadia, parabéns!`);
            personagem.mudarSaldo(50000);
            personagem.aumentarXp(50);
            personagem.aumentarMoral(20);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance > 90 && chance <= 95){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Eu vi sua patética tentativa, mal conseguiu entrar no banco e o primeiro guarda te pegou,
por isso é importante começar com assaltos menores.`);
            resultado = 'Preso';
            return resultado;
        }
    }
}

function segundoAssalto(){
    let resultado = 'Livre'
    tempo.passarTempo(0, 0, 0);
    console.log('2º ASSALTO');
    console.log(`Agora você já teve uma breve experiência de como é um assalto, vamos ao segundo assalto.
Se você obteve sucesso no roubo anterior você terá um pouco mais de facilidade para realizar os próximos.`);
    console.log();
    console.log(`Você tem ${personagem.xp} de experiência`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Agora precisamos escolher o local que você irá assaltar, escolha uma das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.clear();
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. Eu tenho um bom estoque 
de armas e ferramentas, mas você só terá acesso a algumas: `);
    for (let i of ferramentas){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaArma = +prompt();
    while (escolhaArma < 1 || escolhaArma > 5){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.clear();
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar ${lugaresAssalto[escolhaLug - 1]}, 
com a arma ${ferramentas[escolhaArma - 1]}.`);
    console.log();
    tempo.passarTempo(0, 3, 30);
    console.log();
    console.log(`Novamente, para não me envolver com alguma suspeita nos encontraremos amanhã, no nosso esconderijo! 
                                    BOA SORTE!!`);
    console.log();
    console.log(`Ok. Tudo pronto, bora pro assalto.`);
    console.log();
    prompt('Tecle [ENTER] para ver o resultado da seu assalto');
    console.clear();
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (escolhaArma == 5){
            console.log('Você é louco? Achou que ninguém perceberia que você estava carregando um Fuzil no meio da rua?!')
            console.log('Você mereceu ser preso por essa idiotice.')
            resultado = 'Preso'
            return resultado;
        } else if (chance >= 5){
            console.log(`Você conseguiu assaltar a senhorinha com sucesso. Não foi tão difícil né?! 
Isso te da um pouco mais de experiência para os próximos assaltos.`);
            personagem.mudarSaldo(500);
            personagem.aumentarXp(10);
            personagem.aumentarMoral(2);
            resultado = 'Sucesso';
            return resultado;
            } else if (chance >= 3 && chance <= 4) {
            console.log('Você não conseguiu assaltá-la, mas conseguiu fugir sem que ninguém te pegasse.');
            resultado = 'Fugiu';
            return resultado;
        } else { 
            console.log(`Você deu azar, estava passando um policial bem na hora e 
conseguiu prendê-lo antes que roubasse a senhorinha.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 2){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 30){
            console.log(`Você conseguiu assaltar o mercadinho com sucesso. Já está muito mais ágil que da primeira vez.`);
            personagem.mudarSaldo(2000);
            personagem.aumentarXp(20);
            personagem.aumentarMoral(5);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 20 && chance <= 29){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Você foi preso, não imaginava que a polícia chegaria tão rápido né?!`);
            resultado = 'Preso';
            return resultado;
            }
    } else if (escolhaLug == 3){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 60){
            console.log(`Isso foi bem arriscado, essas lojas possuem muitos sistemas de segurança.
Mas está de parabéns, foi um roubo muito bem planejado!`);
            personagem.mudarSaldo(10000);
            personagem.aumentarXp(30);
            personagem.aumentarMoral(10);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 50 && chance <= 59){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`A loja de joias sempre possuem maior segurança, infelizmente você foi pego pela polícia.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 4){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 75){
            console.log(`Não imaginei que você conseguiria esse feito. Não tem tanta segurança nesse lugar, mas nunca
é simples roubar um banco`);
            personagem.mudarSaldo(20000);
            personagem.aumentarXp(40);
            personagem.aumentarMoral(15);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 65 && chance <= 74){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Já era de se esperar, um iniciante tentando roubar um banco?! Se não for muito bem planejado
a prisão é certa.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 5){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 96){
            if (escolhaArma == 1){
                console.log(`Suas chances de cometer um furto no principal banco da cidade são mínimas sem a arma adequada.

Você deu sorte que não estava com nenhuma arma, então conseguiu fugir do banco sem tantas suspeitas.`);
            }
            console.log(`Você é maluco!! Com tão pouca experiência assaltar o maior banco da cidade?!
Mas gostei da sua ousadia, parabéns!`);
            personagem.mudarSaldo(50000);
            personagem.aumentarXp(50);
            personagem.aumentarMoral(20);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 90 && chance <= 95){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Eu vi sua patética tentativa, mal conseguiu entrar no banco e o primeiro guarda te pegou,
por isso é importante ganhar mais experiência com assaltos menores.`);
            resultado = 'Preso';
            return resultado;
        }
    }
}

function terceiroAssalto(){
    let resultado = 'Livre'
    tempo.passarTempo(0, 0, 0);
    console.log('3º ASSALTO');
    console.log(`As coisas estão ficando boas, você já está avançando com os assaltos e já tem mais experiência pra
executar assaltos maiores.`);
    console.log();
    console.log(`Você tem ${personagem.xp} de experiência`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Agora você já está mais acostumado com o planejamento. 
Precisamos escolher o local que você irá assaltar, escolha uma das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.clear();
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. Como você já sabe, essas são suas armas disponíveis: `);
    for (let i of ferramentas){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaArma = +prompt();
    while (escolhaArma < 1 || escolhaArma > 5){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.clear();
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar ${lugaresAssalto[escolhaLug - 1]}, 
com a arma ${ferramentas[escolhaArma - 1]}.`);
    console.log();
    tempo.passarTempo(0, 3, 30);
    console.log();
    console.log(`Você sabe onde me encontrar quando acabar o assalto! 
                                    BOA SORTE!!`);
    console.log();
    console.log(`Ok. Tudo pronto, bora pro assalto.`);
    console.log();
    prompt('Tecle [ENTER] para ver o resultado da seu assalto');
    console.clear();
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (escolhaArma == 5){
            console.log('Você é louco? Achou que ninguém perceberia que você estava carregando um Fuzil no meio da rua?!')
            console.log('Você mereceu ser preso por essa idiotice.')
            resultado = 'Preso'
            return resultado;
        } else if (chance >= 5){
            console.log(`Você já passou dessa fase de assaltar senhorinhas na rua né?! Tente algo mais desafiador,
desse jeito não conseguirá tanto dinheiro quanto poderia.`);
            personagem.mudarSaldo(500);
            personagem.aumentarXp(10);
            personagem.aumentarMoral(2);
            resultado = 'Sucesso';
            return resultado;
            } else if (chance >= 3 && chance <= 4) {
            console.log('Você não conseguiu assaltá-la, mas conseguiu fugir sem que ninguém te pegasse.');
            resultado = 'Fugiu';
            return resultado;
        } else { 
            console.log(`Você deu azar, estava passando um policial bem na hora e 
conseguiu prendê-lo antes que roubasse a senhorinha.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 2){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 30){
            console.log(`Você conseguiu assaltar o mercadinho com sucesso. Você está bem melhor que das primeiras vezes.`);
            personagem.mudarSaldo(2000)
            personagem.aumentarXp(20);
            personagem.aumentarMoral(5);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 20 && chance <= 29){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Você foi preso, não imaginava que a polícia chegaria tão rápido né?!`);
            resultado = 'Preso';
            return resultado;
            }
    } else if (escolhaLug == 3){
        let chance = Math.ceil(Math.random()*100 + personagem.xp);
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 60){
            console.log(`Isso foi bem arriscado, essas lojas possuem muitos sistemas de segurança.
Mas está de parabéns, foi um roubo muito bem planejado!`);
            personagem.mudarSaldo(10000)
            personagem.aumentarXp(30);
            personagem.aumentarMoral(10);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 50 && chance <= 59){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`A loja de joias sempre possuem maior segurança, infelizmente você foi pego pela polícia.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 4){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 75){
            console.log(`Não imaginei que você conseguiria esse feito. Não tem tanta segurança nesse lugar, mas nunca
é simples roubar um banco`);
            personagem.mudarSaldo(20000);
            personagem.aumentarXp(40);
            personagem.aumentarMoral(15);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 65 && chance <= 74){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Já era de se esperar, um iniciante tentando roubar um banco?! Se não for muito bem planejado
a prisão é certa.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 5){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 96){
            if (escolhaArma == 1){
                console.log(`Suas chances de cometer um furto no principal banco da cidade são mínimas sem a arma adequada.

Você deu sorte que não estava com nenhuma arma, então conseguiu fugir do banco sem tantas suspeitas.`);
            }
            console.log(`Você é maluco!! Com tão pouca experiência assaltar o maior banco da cidade?!
Mas gostei da sua ousadia, parabéns!`);
            personagem.mudarSaldo(50000);
            personagem.aumentarXp(50);
            personagem.aumentarMoral(20);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 90 && chance <= 95){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Eu vi sua patética tentativa, mal conseguiu entrar no banco e o primeiro guarda te pegou,
por isso é importante ganhar mais experiência com assaltos menores.`);
            resultado = 'Preso';
            return resultado;
        }
    }
}

function quartoAssalto(){
    let resultado = 'Livre'
    tempo.passarTempo(0, 0, 0);
    console.log('4º ASSALTO');
    console.log(`As coisas estão ficando boas, você já está avançando com os assaltos e já tem mais experiência pra
executar assaltos maiores.`);
    console.log();
    console.log(`Você tem ${personagem.xp} de experiência`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Agora você já está mais acostumado com o planejamento. 
Precisamos escolher o local que você irá assaltar, escolha uma das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.clear();
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. Como você já sabe, essas são suas armas disponíveis: `);
    for (let i of ferramentas){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaArma = +prompt();
    while (escolhaArma < 1 || escolhaArma > 5){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.clear();
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar ${lugaresAssalto[escolhaLug - 1]}, 
com a arma ${ferramentas[escolhaArma - 1]}.`);
    console.log();
    tempo.passarTempo(0, 3, 30);
    console.log();
    console.log(`Nós nos encontraremos amanhã no mesmo lugar de sempre! 
                                    BOA SORTE!!`);
    console.log();
    console.log(`Ok. Tudo pronto, bora pro assalto.`);
    console.log();
    prompt('Tecle [ENTER] para ver o resultado da seu assalto');
    console.clear();
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (escolhaArma == 5){
            console.log('Você é louco? Achou que ninguém perceberia que você estava carregando um Fuzil no meio da rua?!')
            console.log('Você mereceu ser preso por essa idiotice.')
            resultado = 'Preso'
            return resultado;
        } else if (chance >= 5){
            console.log(`Você já passou dessa fase de assaltar senhorinhas na rua né?! Tente algo mais desafiador,
desse jeito não conseguirá tanto dinheiro quanto poderia.`);
            personagem.mudarSaldo(500);
            personagem.aumentarXp(10);
            personagem.aumentarMoral(2);
            resultado = 'Sucesso';
            return resultado;
            } else if (chance >= 3 && chance <= 4) {
            console.log('Você não conseguiu assaltá-la, mas conseguiu fugir sem que ninguém te pegasse.');
            resultado = 'Fugiu';
            return resultado;
        } else { 
            console.log(`Você deu azar, estava passando um policial bem na hora e 
conseguiu prendê-lo antes que roubasse a senhorinha.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 2){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 30){
            console.log(`Você conseguiu assaltar o mercadinho com sucesso. Mas já está na hora de tentar algo maior.`);
            personagem.mudarSaldo(2000);
            personagem.aumentarXp(20);
            personagem.aumentarMoral(5);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 20 && chance <= 29){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Você foi preso, não imaginava que a polícia chegaria tão rápido né?!`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 3){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 60){
            console.log(`Isso foi bem arriscado, essas lojas possuem muitos sistemas de segurança.
Mas está de parabéns, foi um roubo muito bem planejado!`);
            personagem.mudarSaldo(10000);
            personagem.aumentarXp(30);
            personagem.aumentarMoral(10);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 50 && chance <= 59){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`A loja de joias sempre possuem maior segurança, infelizmente você foi pego pela polícia.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 4){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 75){
            console.log(`Não imaginei que você conseguiria esse feito. Não tem tanta segurança nesse banco, mas nunca
é simples roubar um banco`);
            personagem.mudarSaldo(20000);
            personagem.aumentarXp(40);
            personagem.aumentarMoral(15);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 65 && chance <= 74){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Bom, não foi dessa vez, se planejarmos um pouco melhor conseguiremos roubar todo o dinheiro desse banco!!`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 5){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 96){
            if (escolhaArma == 1){
                console.log(`Suas chances de cometer um furto no principal banco da cidade são mínimas sem a arma adequada.

Você deu sorte que não estava com nenhuma arma, então conseguiu fugir do banco sem tantas suspeitas.`);
            }
            console.log(`Você avançou muito, já está conseguindo fazer grandes roubos`);
            personagem.mudarSaldo(50000);
            personagem.aumentarXp(50);
            personagem.aumentarMoral(20);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 90 && chance <= 95){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Bom, não foi dessa vez, se planejarmos um pouco melhor conseguiremos roubar todo o dinheiro desse banco!!`);
            resultado = 'Preso';
            return resultado;
        }
    }
}

function quintoAssalto(){
    let resultado = 'Livre'
    tempo.passarTempo(0, 0, 0);
    console.log('5º ASSALTO');
    tempo.passarTempo(0, 0, 0);
    console.log(`Vamos ao último assalto, esse decidirá o seu final.`);
    console.log();
    console.log(`Você tem ${personagem.xp} de experiência`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`E qual local que você irá assaltar para finalizar, escolha uma das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.clear();
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. Como você já sabe, essas são suas armas disponíveis: `);
    for (let i of ferramentas){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5:');
    let escolhaArma = +prompt();
    while (escolhaArma < 1 || escolhaArma > 5){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.clear();
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar ${lugaresAssalto[escolhaLug - 1]}, 
com a arma ${ferramentas[escolhaArma - 1]}.`);
    console.log();
    tempo.passarTempo(0, 3, 30);
    console.log();
    console.log(`Nós nos encontraremos amanhã no mesmo lugar de sempre! 
                                    BOA SORTE!!`);
    console.log();
    console.log(`Ok. Tudo pronto, bora pro assalto.`);
    console.log();
    prompt('Tecle [ENTER] para ver o resultado da seu assalto');
    console.clear();
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (escolhaArma == 5){
            console.log('Você é louco? Achou que ninguém perceberia que você estava carregando um Fuzil no meio da rua?!')
            console.log('Você mereceu ser preso por essa idiotice.')
            resultado = 'Preso'
            return resultado;
        } else if (chance >= 5){
            console.log(`Você já passou dessa fase de assaltar senhorinhas na rua né?! Tente algo mais desafiador,
desse jeito não conseguirá tanto dinheiro quanto poderia.`);
            personagem.mudarSaldo(500);
            personagem.aumentarXp(10);
            personagem.aumentarMoral(2);
            resultado = 'Sucesso';
            return resultado;
            } else if (chance >= 3 && chance <= 4) {
            console.log('Você não conseguiu assaltá-la, mas conseguiu fugir sem que ninguém te pegasse.');
            resultado = 'Fugiu';
            return resultado;
        } else { 
            console.log(`Você deu azar, estava passando um policial bem na hora e 
conseguiu prendê-lo antes que roubasse a senhorinha.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 2){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 30){
            console.log(`Você conseguiu assaltar o mercadinho com sucesso. Mas já está na hora de tentar algo maior.`);
            personagem.mudarSaldo(2000);
            personagem.aumentarXp(20);
            personagem.aumentarMoral(5);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 20 && chance <= 29){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Você foi preso, não imaginava que a polícia chegaria tão rápido né?!`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 3){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 60){
            console.log(`Isso foi bem arriscado, essas lojas possuem muitos sistemas de segurança.
Mas está de parabéns, foi um roubo muito bem planejado!`);
            personagem.mudarSaldo(10000);
            personagem.aumentarXp(30);
            personagem.aumentarMoral(10);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 50 && chance <= 59){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`A loja de joias sempre possuem maior segurança, infelizmente você foi pego pela polícia.`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 4){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 75){
            console.log(`Não imaginei que você conseguiria esse feito. Não tem tanta segurança nesse banco, mas nunca
é simples roubar um banco`);
            personagem.mudarSaldo(20000);
            personagem.aumentarXp(40);
            personagem.aumentarMoral(15);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 65 && chance <= 74){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Bom, não foi dessa vez, se planejarmos um pouco melhor conseguiremos roubar todo o dinheiro desse banco!!`);
            resultado = 'Preso';
            return resultado;
        }
    } else if (escolhaLug == 5){
        let chance = Math.ceil(Math.random()*100) + personagem.xp;
        console.log(`Você fez ${chance} pontos nesse assalto.`);
        if (chance >= 96){
            if (escolhaArma == 1){
                console.log(`Suas chances de cometer um furto no principal banco da cidade são mínimas sem a arma adequada.

Você deu sorte que não estava com nenhuma arma, então conseguiu fugir do banco sem tantas suspeitas.`);
            }
            console.log(`Você avançou muito, já está conseguindo fazer grandes roubos`);
            personagem.mudarSaldo(50000);
            personagem.aumentarXp(50);
            personagem.aumentarMoral(20);
            resultado = 'Sucesso';
            return resultado;
        } else if (chance >= 90 && chance <= 95){
            console.log(`Essa foi por pouco, você não conseguiu sucesso no roubo, mas pelo menos conseguiu fugir.`);
            resultado = 'Fugiu';
            return resultado;
        } else {
            console.log(`Bom, não foi dessa vez, se planejarmos um pouco melhor conseguiremos roubar todo o dinheiro desse banco!!`);
            resultado = 'Preso';
            return resultado;
        }
    }
}


Jogo_Todo: while(true){
    console.log(`Ok. Já que você escolheu seguir na vida do crime, saiba que não é fácil e é importante 
passar algumas informações para você antes de começarmos:

Eu vou lhe passar uma lista de opções para assaltar, serão listadas da mais fácil até a mais difícil.
Quanto mais difícil, mais experiência você conseguirá, mas você correrá mais risco de ser preso.
A experiência aumenta sua chance de sucesso para os próximos assaltos. Você ganhará moral com cada assalto 
feito, e assim como a experiência, quanto mais difícil, mais moral. A moral servirá para decidir seu 
cargo final, caso consiga fazer todos os assaltos.`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Suas chances são as seguintes, será escolhido um número aleatório para você e somado a sua
experiência você deve tirar mais que:
Uma idosa na rua (5 pontos), concede 10 xp e 2 moral
Um mercadinho de bairro (30 pontos), concede 20 xp e 5 moral
Uma loja de jóias (60 pontos), concede 30 xp e 10 moral
Um banco com pouco movimento (75 pontos), concede 40 xp e 15 moral
O banco principal da cidade (96 pontos), concede 50 xp e 30 moral`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    console.log(`Use sua lógica para a escolha das armas, não concedem pontos extras, mas algumas não são
condizentes com a situação`);
    console.log();
    prompt('Tecle [ENTER] para continuar.');
    console.clear();
    Assalto1: for (let i = 0; i < 6; i++){
        resultado = primeiroAssalto();
        console.log();
        prompt('Tecle [ENTER] para continuar.');
        console.clear();
        if (resultado != 'Preso'){
            tempo.passarTempo(0, 6, 0);
            console.log('Depois da fuga...');
            console.log(`Agora vamos contar todo o dinheiro para saber quanto você tem no total.`);
            console.log(`Você tem agora ${personagem.saldo} reais`);
            tempo.passarTempo(0, 2, 50);
            console.log(`Agora deve se alimentar e esconder as provas do crime para que ninguém suspeite.`);
            tempo.passarTempo(0, 2, 10);
            console.log(`Está na hora de dormir, amanhã deverá se encontrar com Javier bem cedo.`);
            tempo.passarTempo(0, 9, 30);
            console.log(`Encontrando Javier no esconderijo dia seguinte, ele questiona:
Você deseja continuar para o próximo assalto?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                console.log('escolha uma das opções acima: ');
                continuar = +prompt();
            }
            if (continuar == 2){
                console.log('É uma pena você já desistir agora, você poderia ganhar muito dinheiro.');
                break Jogo_Todo;
            } else {
                break Assalto1;
            }
        } else {
            console.log('Você foi preso.');
            console.log('Você possui', chances, 'chances.');
            if (chances == 0){
                console.log(`################################# 
            GAME OVER 
#################################`);
                break Jogo_Todo;
            }
            console.log(`Deseja tentar novamente?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
            console.log('escolha uma das opções acima: ');
            continuar = +prompt();
            }
            if (continuar == 1){
                tempo.passarTempo(0, -3, -30);
                console.clear();
                console.log('Voltando para o início do dia...');
                chances-= 1
                continue Assalto1;
            } else {
                break Jogo_Todo;
            }
        }
    }
    Assalto2: for (let i = 0; i < 6; i++){
        resultado = segundoAssalto();
        console.log();
        prompt('Tecle [ENTER] para continuar.');
        console.clear();
        if (resultado != 'Preso'){
            tempo.passarTempo(0, 6, 0);
            console.log('Depois da fuga...');
            console.log(`Agora vamos contar todo o dinheiro para saber quanto você tem no total.`);
            console.log(`Você tem agora ${personagem.saldo} reais`);
            tempo.passarTempo(0, 2, 50);
            console.log(`Agora deve se alimentar e esconder as provas do crime para que ninguém suspeite.`);
            tempo.passarTempo(0, 2, 10);
            console.log(`Está na hora de dormir, amanhã deverá se encontrar com Javier bem cedo.`);
            tempo.passarTempo(0, 9, 30);
            console.log(`Encontrando Javier no esconderijo dia seguinte, ele questiona:
Você deseja continuar para o próximo assalto?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                console.log('escolha uma das opções acima: ');
                continuar = +prompt();
            }
            if (continuar == 2){
                console.log(`Você conseguiu um dinheiro extra, mas acha que isso já é o suficiente pra
viver o resto de sua vida?! Bom, você fez sua escolha, então, boa sorte!`);
                break Jogo_Todo;
            } else {
                break Assalto2;
            }
        } else {
            console.log('Você foi preso.');
            console.log('Você possui', chances, 'chances.');
            if (chances == 0){
                console.log(`################################# 
            GAME OVER 
#################################`);
                break Jogo_Todo;
            }
            console.log(`Deseja tentar novamente?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
            console.log('escolha uma das opções acima: ');
            continuar = +prompt();
            }
            if (continuar == 1){
                tempo.passarTempo(0, -3, -30);
                console.clear();
                console.log('Voltando para o início do dia...');
                chances-= 1
                continue Assalto2;
            } else {
                break Jogo_Todo;
            }
        }
    }
    Assalto3: for (let i = 0; i < 6; i++){    
        resultado = terceiroAssalto();
        console.log();
        prompt('Tecle [ENTER] para continuar.');
        console.clear();
        if (resultado != 'Preso'){
            tempo.passarTempo(0, 6, 0);
            console.log('Depois da fuga...');
            console.log(`Agora vamos contar todo o dinheiro para saber quanto você tem no total.`);
            console.log(`Você tem agora ${personagem.saldo} reais`);
            tempo.passarTempo(0, 2, 50);
            console.log(`Agora deve se alimentar e esconder as provas do crime para que ninguém suspeite.`);
            tempo.passarTempo(0, 2, 10);
            console.log(`Está na hora de dormir, amanhã deverá se encontrar com Javier bem cedo.`);
            tempo.passarTempo(0, 9, 30);
            console.log(`Encontrando Javier no esconderijo dia seguinte, ele questiona:
Você deseja continuar para o próximo assalto?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                console.log('escolha uma das opções acima: ');
                continuar = +prompt();
            }
            if (continuar == 2){
                console.log(`Foi um prazer trabalhar com você, espero que esse tempo de parceria tenha te 
gerado uma boa quantia de dinheiro para sua vida.`);
                break Jogo_Todo;
            } else {
                break Assalto3;
            }
        } else {
            console.log('Você foi preso.');
            console.log('Você possui', chances, 'chances.');
            if (chances == 0){
                console.log(`################################# 
            GAME OVER 
#################################`);
                break Jogo_Todo;
            }
            console.log(`Deseja tentar novamente?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
            console.log('escolha uma das opções acima: ');
            continuar = +prompt();
            }
            if (continuar == 1){
                tempo.passarTempo(0, -3, -30);
                console.clear();
                console.log('Voltando para o início do dia...');
                chances-= 1
                continue Assalto3;
            } else {
                break Jogo_Todo;
            }
        }
    }
    Assalto4: for (let i = 0; i < 6; i++){
        resultado = quartoAssalto();
        console.log();
        prompt('Tecle [ENTER] para continuar.');
        console.clear();
        if (resultado != 'Preso'){
            tempo.passarTempo(0, 6, 0);
            console.log('Depois da fuga...');
            console.log(`Agora vamos contar todo o dinheiro para saber quanto você tem no total.`);
            console.log(`Você tem agora ${personagem.saldo} reais`);
            tempo.passarTempo(0, 2, 50);
            console.log(`Agora deve se alimentar e esconder as provas do crime para que ninguém suspeite.`);
            tempo.passarTempo(0, 2, 10);
            console.log(`Está na hora de dormir, amanhã deverá se encontrar com Javier bem cedo.`);
            tempo.passarTempo(0, 9, 30);
            console.log(`Encontrando Javier no esconderijo dia seguinte, ele questiona:
Você deseja continuar para o próximo assalto?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                console.log('escolha uma das opções acima: ');
                continuar = +prompt();
            }
            if (continuar == 2){
                console.log('É uma pena você já desistir agora, você poderia ganhar muito dinheiro.')
                break Jogo_Todo;                    
            } else {
                break Assalto4;
            }
        } else {
            console.log('Você foi preso.');
            console.log('Você possui', chances, 'chances.');
            if (chances == 0){
                console.log(`################################# 
            GAME OVER 
#################################`);
                break Jogo_Todo;
            }
            console.log(`Deseja tentar novamente?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
            console.log('escolha uma das opções acima: ');
            continuar = +prompt();
            }
            if (continuar == 1){
                tempo.passarTempo(0, -3, -30);
                console.clear();
                console.log('Voltando para o início do dia...');
                chances-= 1
                continue Assalto4;
            } else {
                break Jogo_Todo;
            }
        }
    }
    Assalto5: for (let i = 0; i < 6; i++){
        resultado = quintoAssalto();
        console.log();
        prompt('Tecle [ENTER] para continuar.');
        console.clear();
        if (resultado != 'Preso'){
            tempo.passarTempo(0, 6, 0);
            console.log('Depois da fuga...');
            console.log(`Agora vamos contar todo o dinheiro para saber quanto você tem no total.`);
            console.log(`Você tem agora ${personagem.saldo} reais`);
            tempo.passarTempo(0, 2, 50);
            console.log(`Agora deve se alimentar e esconder as provas do crime para que ninguém suspeite.`);
            tempo.passarTempo(0, 2, 10);
            console.log(`Está na hora de dormir, amanhã deverá se encontrar com Javier bem cedo.`);
            tempo.passarTempo(0, 9, 30);
            console.log(`Encontrando Javier no esconderijo dia seguinte, ele questiona:
Você deseja continuar para o último assalto?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
                console.log('escolha uma das opções acima: ');
                continuar = +prompt();
            }
            if (continuar == 2){
                console.log('É uma pena você já desistir agora, você poderia ganhar muito dinheiro.')
                break Jogo_Todo;                    
            } else {
                break Assalto5;
            }
        } else {
            console.log('Você foi preso.');
            console.log('Você possui', chances, 'chances.');
            if (chances == 0){
                console.log(`################################# 
            GAME OVER 
#################################`);
                break Jogo_Todo;
            }
            console.log(`Deseja tentar novamente?
[1] Sim
[2] Não`);
            continuar = +prompt();
            while (continuar != 1 && continuar != 2){
            console.log('escolha uma das opções acima: ');
            continuar = +prompt();
            }
            if (continuar == 1){
                tempo.passarTempo(0, -3, -30);
                console.clear();
                console.log('Voltando para o início do dia...');
                chances-= 1
                continue Assalto5;
            } else {
                break Jogo_Todo;
            }
        }
    }
    break Jogo_Todo;
}
            
        
if (personagem.moral >= 65){
    console.log(`Sua moral com Javier é de ${personagem.moral}`);
    console.log(`Javier: Sua moral ficou muito alta agora você pode até criar sua própria máfia e ganhar mais dinheiro com
outros assaltos pela cidade. Já te ensinei tudo o que precisa saber.`);
} else if (personagem.moral >= 45 && personagem.moral <= 64){
    console.log(`Sua moral com Javier é de ${personagem.moral}`);
    console.log(`Javier: Gostei muito de você, venha trabalhar comigo como meu braço direito!`);
} else if (personagem.moral >= 30 && personagem.moral <= 44){
    console.log(`Sua moral com Javier é de ${personagem.moral}`);
    console.log(`Javier: Até que você não é ruim, você pode ficar na equipe que realiza pequenos assaltos.`);
} else {
    console.log(`Javier: Você é péssimo, não tem perfil para permanecer na nossa equipe!`);
}





