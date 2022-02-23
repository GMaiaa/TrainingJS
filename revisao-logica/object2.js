const pessoa = {
    nome: "Jeferson",
    idade: 23,
    email: "jeferson@putifero.js"
}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
} 