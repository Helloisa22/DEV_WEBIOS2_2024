let cep = document.getElementById('cep').value;
let URL = `https://viacep.com.br/ws/${cep}/json/`

async function BuscaCep(){
    await fetch(URL).then((response) => {
        // Transformar JSON em OBJ
        return response.json();
    }).then((response) => {
        document.getElementById('cep').value = response.cep;
        document.getElementById('logradouro').value = response.logradouro;
        document.getElementById('complemento').value = response.complemento;
        document.getElementById('bairro').value = response.bairro;
        document.getElementById('estado').value = response.estado;
    })
}

let viaCEP = {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    unidade: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107"
  }