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
nome
fome
saúde
dinheiro
estresse
ganância
suspeita
moral

(aluguel)


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


*/