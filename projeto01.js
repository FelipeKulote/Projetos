const prompt = require("prompt-sync")();
console.clear();

//                    ###    DESAFIO DO HERÓI    ###
// Criar uma história com 5 desafios a serem concluídos, cada desafio deverá ser respondido com "sim" ou "não"
// Exibir respostas sobre o desenvolvimento de acordo com os desafios concluídos pelo nosso herói 

console.log(`Você está se preparando para se aventurar pelo mundo, conquistar seu maior sonho que é viajar pelo país dirigindo seu próprio veículo, 
mas para isso é necessário que você conquiste primeiro sua carteira de motorista. Todos sabemos dos desafios para essa conquista, mas você está preparado?
Cada etapa possui sua dificuldade e tarefas para passar para as próximas fases, você deve levar este desafio a sério para conquistar seu objetivo!!

Vamos conferir sua evolução, responda sim ou não para nossas perguntas, OK?`);
prompt();

let x = 0

let p1 = prompt('Você procurou uma escola com bons índices de aprovação? ');
while(p1.toLowerCase() != 'sim' && p1.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    p1 = prompt('Você procurou uma escola com bons índices de aprovação? ');
}
if (p1.toLowerCase() == 'sim') {x++}

let p2 = prompt('Você está estudando para passar na prova teórica? ');
while(p2.toLowerCase() != 'sim' && p2.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    p2 = prompt('Você está estudando para passar na prova teórica? ');
}
if (p2.toLowerCase() == 'sim') {x++}

let p3 = prompt('Você acertou mais de 25 questões da prova teórica? ');
while(p3.toLowerCase() != 'sim' && p3.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    p3 = prompt('Você acertou mais de 25 questões da prova teórica? ');
}
if (p3.toLowerCase() == 'sim') {x++}

let p4 = prompt('Você entendeu tudo sobre as aulas práticas de direção de veículos? ');
while(p4.toLowerCase() != 'sim' && p4.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    p4 = prompt('Você entendeu tudo sobre as aulas práticas de direção de veículos? ');
}
if (p4.toLowerCase() == 'sim') {x++}

let p5 = prompt('Você passou no exame de direção? ');
while(p5.toLowerCase() != 'sim' && p5.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    p5 = prompt('Você passou no exame de direção? ');
}
if (p5.toLowerCase() == 'sim') {x++}
console.log();

if (x == 0) {
    console.log('Que vergonha... Você não está nem tentando alcançar seu sonho!!');
}
else if (x == 1 || x == 2) {
    console.log('Se esforce, você é capaz de mais.');
}
else if (x == 3) {
    console.log('Você está quase lá!! Não desanime e tire todas as dúvidas com seu instrutor.');
}
else if (x == 4) {
    console.log('Essa bendita baliza, sempre causando problemas, mas treine mais, no próximo exame você com certeza conseguirá!!');
}
else {
    console.log('QUE MARAVILHA, VOCÊ CONSEGUIU!! AGORA FINALMENTE PODERÁ REALIZAR SEU SONHO E CONHECER MUITOS LUGARES NOVOS!!');
}
