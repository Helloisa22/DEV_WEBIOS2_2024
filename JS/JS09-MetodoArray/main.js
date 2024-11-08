// Array -- Metodo ForEach
let frutas = ["Pera", "Abacaxi", "Morango", "Melancia", "Macã", "melão", "limao", "tomato"] // Coloque o nome de 8 frutas

// nome usuario e pontuacao
// Array bid
let infoUsuario = [
    ["Ana", 1346], 
    ["Pedro", 2335], // 1
    ["Caio", 566],
]
// ForEach ele faz a função do for 
infoUsuario.forEach((valor, indice) =>{
    if(indice == 1){
        console.log(valor)
    }
})



// frutas.forEach((valor, indice) => {
//      console.log(valor); // conteudo da posição
//      console.log(indice); // numero da posição
// })

// frutas.forEach(Percorrer)
///             conteudo, indice
// function Percorrer(valor, indice){
//     console.log(valor); // conteudo da posição
//     console.log(indice); // numero da posição
// }




// for(i = 0; i <= frutas.length ; i++){
//     console.log(frutas[i]); // conteudo da posição
//     console.log(i); // numero da posição
// }


console.clear()


// array de valores aleatorios com 6 posiçoes > numeros

// Math.currently / Math.max / Math.min / Math.sqrt
let numeros = [4, 9, 16, 25, 78, 34]

// Trazer um novo array atualizado com a raiz quadrado de cada número do array
let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)

console.log(maiorNumero + " " + menorNumero)

// console.log(numeros)
// console.log(numerosDois)
// console.log(maiorNumero)

// console.clear()

// Crie um array de 8 numero aleatorios > numerosTres

let filtraNumero = numeros.filter((valor) => {
    return valor >= 16
})

// criando um novo array onde ira conter apenas os número maiores ou iguais a 16
console.log(numeros)
console.log(filtraNumero)

console.clear()

// trabalhando com array de objeto

let tarefa = [
    {
        tarefa: "Dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]

// retorne apenas as tarefas que estão marcadas como true
// find
// Busca*****
let retornaTrue = tarefa.find((item) =>{
    return item.isFeita === true;
})

console.log(retornaTrue)

