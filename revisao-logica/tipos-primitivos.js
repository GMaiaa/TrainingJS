// strings, number (int, floats), boolean
//undefined, null, symbol (ES2015)

let minhaVar = "minha string" 
let minhaVar2 = 'minha string'

let minhaVar3 = 'minha "string" com aspas dupla' //pode ser feito com aspas simples dentro de aspas dupla
console.log(minhaVar3)

let idade = 40;
let msg = "eu possuo "  + idade +  " anos" //ou
let msg2 = `eu possuo ${idade} anos`

console.log(msg2);
console.log(typeof msg, typeof idade, typeof minhaVar, "Teste", 0); //verificar um tipo de variavel

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`)

let varTeste
console.log(varTeste);
console.log(typeof varTeste);


