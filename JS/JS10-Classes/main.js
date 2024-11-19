class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
    this.nome = nome;
    this.ano = ano;
    this.altura = altura;
    this.isCracha = isCracha;
    this.isCamisa = isCamisa;
    this.cor = cor;
    }

    retornaIdade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear()
        return pegaAno - this.ano
    }
}


// classe no JS Date -- Retorna informações de data de acordo com o que está configurado no seu computador/servidor

// Instancia == copias
let aluno1 = new Aluno("Manasses", 1997, 1.90, true, true, "Black");

let aluno2 = new Aluno("Jeferson", 2005, 1.75, true, true, "AllWhite")

console.log(aluno1)
console.log(`A idade do Manasses é ${aluno1.retornaIdade()}`)
console.log(aluno2)
