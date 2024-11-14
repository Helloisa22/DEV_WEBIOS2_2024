/// Vamos desenvolver uma tabuada
// Pega o elemento utilizando o ID
let valor = document.getElementById('recebeValor')
// Pega o elemento utilizando o atributo name
let resultado = document.getElementById('resultado')

const Tabuada = () => {
    // value - guardar o valor que está sendo digitado dentro da variavel
    let guardaValor = valor.value;
    resultado.innerHTML = ''
    resultado.style.color = "black"

    if(guardaValor == ''){
        resultado.innerHTML = "Insira um valor valido"
        resultado.style.color = "red"
    }else{
        for ( i = 0; i <= 10; i++){
            let resultadoTabuada = guardaValor * i;
            console.log(guardaValor, 'x', i, '=' ,resultadoTabuada)
    
            resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor * i} <br/>`
            // innerHTML
            // console.log(`O valor de ${guardaValor} x ${i} é igual a ${guardaValor * i}`);
        }
    }  
}

// Limpar os campos
const Limpar = () => {
    resultado.innerHTML = '';
    valor.value = '';
}