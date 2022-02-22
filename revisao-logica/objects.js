//const nomes = ["Daniel", "Maria", "Jõao"]
//const idades = [23, 19, 18]
//console.log(nomes[0], idades[0])

/*const pessoa = new Object()
*/

const pessoa = {
    nome: "Daniel",
    idade: 40
}
pessoa.nome = "Daniel"
pessoa.idade = 40
console.log(pessoa)
let prop = "nome"
console.log(pessoa[prop])
console.log(pessoa["idade"])