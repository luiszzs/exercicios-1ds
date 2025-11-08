// CRIE UMA LÓGICA ABAIXO
let prompt = require("prompt-sync")()

let filme1 = {}
let filme2 = {}
let filme3 = {}
let filme4 = {}
let filme5 = {}
let filme6 = {}
let filme7 = {}
let filme8 = {}
let filme9 = {}
let filme10 = {}

let filme = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

for(let i = 0; i < filme.length; i++){

  let titulo = prompt(`Digite o título do ${i + 1}°filme: `)
  let genero = prompt(`Digite o gênero do filme: `)
  let ano = parseInt(prompt(`Digite o ano em que o filme foi lançado: `))
  let avaliacao = parseFloat(prompt(`Digite a avaliação do filme: `))
 
    while (avaliacao > 10 || avaliacao < 0) {
    console.log("Avalie apenas de 0 a 10")
    avaliacao = parseFloat(prompt("Digite a avaliação do filme: "))
}
}
filme[i].titulo = titulo
filme[i].genero = genero
filme[i].ano = ano
filme[i].avaliacao = avaliacao

let avaliacaoMaior = filme[0]
let soma = 0 
for(let i = 0; i < filme.length; i++){
    soma += filme[i].avaliacao
    
    if(filme[i].avaliacao > avaliacaoMaior){
        filme[i].avaliacao = avaliacaoMaior
    }
}

for(let i = 0; i < filme.length; i++){
    console.log(i + 1, filme[i].titulo )
}
console.log("Filme mais bem avaliado:" + avaliacaoMaior)
console.log(`Média geral das avaliações: ${soma / filme.length}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }