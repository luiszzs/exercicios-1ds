// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let dia = 1
let reiniciar
let totalGeral = 0
let resumo = ""
do {
  let producaoDePecas = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))
  let pecas = 0

  while (pecas < producaoDePecas) {
    pecas++
    console.log(`Peça ${pecas} produzida com sucesso.`)
  }
  totalGeral += pecas
  console.log(`Dia ${dia}: produzida(s) com sucesso`)
  if (pecas == producaoDePecas) {
    console.log("Meta alcançada!")
  } else {
    console.log("Meta não alacançada!")
  }
  resumo += ` Resumo dos dias anteriores:
   Dia ${dia}: ${pecas} peças produzida(S) com sucesso \n`
  dia++
  reiniciar = prompt("Deseja simular outro turno?(S/N) ").toLowerCase()
} while (reiniciar == "s")
console.log(resumo)
console.log(`Total geral: ${totalGeral}`)
console.log("Encerrando sistema de produção...")