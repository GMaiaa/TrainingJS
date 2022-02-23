const pessoas = [ {nome:"Lucas", idade:18}, {
    nome: "Gabriel",
    idade: 17
}, {
    nome: "Giovani",
    idade:18
}, {
    nome: "Vitor",
    idade:17
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}