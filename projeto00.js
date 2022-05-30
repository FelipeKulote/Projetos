const prompt = require("prompt-sync")();
console.clear();

//              ###    PROJETO DETETIVE    ###

console.log(`Conferindo o caderno de anotações saberei se João é culpado ou não...`);

let x = 0

let p1 = prompt('A arma do crime foi encontrada na casa de João? ');
if (p1.toLowerCase() == 'sim') {x++}
let p2 = prompt('A digital do João está na arma do crime? ');
if (p2.toLowerCase() == 'sim') {x++}
let p3 = prompt('Alguma testemunha viu João na cena do crime? ');
if (p3.toLowerCase() == 'sim') {x++}
let p4 = prompt('Outras pessoas já relataram que João tinha desavenças com a vítima? ')
if (p4.toLowerCase() == 'sim') {x++}
let p5 = prompt('João se beneficiaria com a morte da vítima? ');
if (p5.toLowerCase() == 'sim') {x++}

if (x >= 4) {
    console.log('João é culpado!');
}
else if (x == 3) {
    console.log('João é um suspeito!');
}
else {
    console.log('João é inocente!');
}

