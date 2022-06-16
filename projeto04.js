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

Criar um objeto para o personagem com os atributos: 
*/
let personagem = {
    nome: 'Felipe',
    saudeFome: 50,
    saldo: 20,
    aluguel: 2,
    estresse: 30,
    ganancia: 0,
    suspeita: 0,
    moral: 0,
    xp: 0,

    mudarSaldo: function(dinheiro){
        this.saldo += dinheiro;
        console.log(`Você tem: ${this.saldo} R$`)
    },
    aumentarSuspeita: function(susp){
        this.suspeita += susp;
        console.log(`Suspeita: ${this.suspeita}`);
    },

    aumentarGanancia: function(ganan){
        this.ganancia += ganan;
        console.log(`Ganância: ${this.ganancia}`)
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
    dia: 0,
    hora: 07,
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
    }
}

let lugaresAssalto = [
    '[1] Um idoso na rua', 
    '[2] Um mercadinho de bairro', 
    '[3] Uma loja de jóias', 
    '[4] Um banco com pouco movimento', 
    '[5] O banco principal da cidade'
]
let ferramentas = [
    '[1] Nenhuma arma',
    '[2] Taco de basebol',
    '[3] Faca',
    '[4] Pistola',
    '[5] Fuzil AK47'
]
function primeiroassalto(){
    let resultado;
    console.log(`Javier: Agora você irá realizar seu primeiro assalto, deve controlar seu nervosismo
    e pensar muito sobre o plano. Como você não tem tanta experiência, aconselho começar com uma coisa
    simples, mas isso é você quem irá decidir, fique a vontade caso queira algo mais complexo, é você que
    está correndo os riscos. Então vamos começar os preparativos.`);
    prompt();
    console.log(`Primeiramente precisamos escolher o local que você irá começar, escolha uma
    das opções: `);
    for (let i of lugaresAssalto){
        console.log(i);
    }
    console.log('Escolha uma das opções utilizando números de 1 a 5')
    let escolhaLug = +prompt();
    while (escolhaLug < 1 || escolhaLug > 5){
        console.log('escolha uma das opções acima: ');
        escolhaLug = +prompt();
    }
    console.log(`Muito bem, agora vamos escolher sua ferramenta/arma. eu tenho um bom estoque 
    de armas e ferramentas, mas você só terá acesso a algumas: `)
    for (let i of ferramentas){
        console.log(i);
    }
    let escolhaArma = +prompt('Escolha uma das opções utilizando números de 1 a 4');
    while (escolhaArma < 1 || escolhaArma > 4){
        console.log('escolha uma das opções acima: ');
        escolhaArma = +prompt();
    }
    console.log(`Muito bem, estamos prontos para começar, você escolheu assaltar 
    ${lugaresAssalto[escolhaLug]}, com a arma ${ferramentas[escolhaArma]}.`)
    passarTempo(0, 2, 0)
    if (escolhaLug == 1){
        let chance = Math.ceil(Math.random()*100);
        if (chance > 10){
            console.log()
        }

    }
}
primeiroassalto();
/*
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




