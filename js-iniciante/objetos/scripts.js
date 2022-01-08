var pessoa = {
  nome: 'Robert',
  sobrenome: 'Adrian',
  idade: 19,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  },
}

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'latir';
    } else {
      return 'nada';
    }
  }  
}