let idade = 17;
let paisPresentes = false;
let comprouPassagem = true;
const podeViajar = (idade >=18 || paisPresentes) && comprouPassagem;
console.log(`Pode viajar: ${podeViajar} `);

/*let msgMaiorIdade = ""
if(idade>=18){
    msgMaiorIdade = "Maior de idade"
} else{
    msgMaiorIdade= "Menor de 18 anos"
}*/
let msgMaiorIdade = (idade >= 18) ? "Maior de Idade" : "Menor de 18 anos"


/*if(comprouPassagem){
    console.log("Sim. Comprou a passagem")
} else {
    console.log("Não. Sem passagem")
}*/

if(!comprouPassagem){
    console.log("Não. Sem passagem")
} else {
    console.log(msgMaiorIdade)
}
let n1 = 0;
let n2 = 3;
let media = (n1 + n2) / 2
console.log(`media: ${media}`);

if(n1 === 0 || n2 === 0){
    console.log("Reprovado")
} else if(media< 6){
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}

