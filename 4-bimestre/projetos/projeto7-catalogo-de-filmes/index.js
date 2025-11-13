// CRIE UMA LÓGICA ABAIXO
let filme1 = {
    titulo: "Batman: Beggins",
    genero: "Ação/Crime",
    ano: 2008,
    avaliacao: 8.5
}
let filme2 = {
    titulo: " Batman: O Cavaleiro Das Trevas",
    genero: "Ação/Crime",
    ano: 2009,
    avaliacao: 9.5
}
let filme3 = {
    titulo: "Batman: Cavaleiro Das Trevas Ressurge",
    genero: "Ação/Crime",
    ano: 2011,
    avaliacao: 8.0
}
let filme4 = {
    titulo: "Batman: Cavaleiro Das Trevas Part. 1 (Animação)",
    genero: "Ação/Crime",
    ano: 2016 ,
    avaliacao: 9.9
}
let filme5 = {
    titulo: "Batman: Cavaleiro Das Trevas Part. 2 (Animação)",
    genero: "Ação/Crime",
    ano: 2017,
    avaliacao: 9.9
}
let filme6 = {
    titulo: "Batman e o Longo Dia Das Bruxas Part. 1",
    genero: "Ação/Crime",
    ano: 2018,
    avaliacao: 9.7
}
let filme7 = {
    titulo: "Batman e o Longo Dia Das Bruxas Part. 2",
    genero: "Ação/Crime",
    ano: 2019,
    avaliacao: 9.8
}
let filme8 = {
    titulo: "Batman: Piada Mortal",
    genero: "Ação/Crime",
    ano: 2019,
    avaliacao: 8.9
}
let filme9 = {
    titulo: "The Batman Part. I",
    genero: "",
    ano: 2022,
    avaliacao: 10.0
}
let filme10 = {
    titulo: "Batman: Sangue em Família",
    genero: "",
    ano: 2020,
    avaliacao: 9.3
}

let filme = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]

let soma = 0 
for(let i = 0; i < filme.length; i++){
    soma += filme[i].avaliacao
}
for(let i = 0; i < filme.length; i++){
    console.log(i + 1, filme[i].titulo )
}
let media = soma / filme.length
console.log("Filme mais bem avaliado: " + filme9.ano )
console.log(`Média geral das avaliações: ${media.toFixed(2)}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }