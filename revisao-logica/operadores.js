// + - * / % **
let n1 = 10
let n2 = 5
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(3 ** 2);

//OPERADORES DE ATRIBUIÇÃO
let n3 = 20;
//n3 = n3 + 15;
n3 += 15;
console.log(n3);

//INCREMENTO E DECREMENTO 
let i = 0
console.log(i++)
console.log(i)

//COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2, n3);

console.log(n1 === 10);

//OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior:
-precisa ser maior de 18 anos
OU
Acompanhado com os pais
E
Ter compranho a passagem
*/

let idade = 18;
let paisPresentes = true;
let comprouPassagem = false;
const podeViajar = (idade >=18 || paisPresentes) && comprouPassagem;
console.log(`Pode viajar: ${podeViajar} `);

console.log(n1, n2, n3);
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2
console.log(`media: ${media}`);

