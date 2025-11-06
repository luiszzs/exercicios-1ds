// CRIE UMA LÓGICA AQUI
function boasVindas(){
    return "Bem-vindo(a) ao sistema!"
}

function soma (a, b){
    return a + b
}

let bemVindo = boasVindas()
let resultado = soma(5, 3)

console.log(bemVindo)
console.log(`Resultado da soma: ${resultado}`)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { boasVindas, soma }