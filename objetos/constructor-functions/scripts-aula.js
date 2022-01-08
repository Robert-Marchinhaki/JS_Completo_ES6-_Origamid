const carros = {
  marca: 'Marca',
  portas: 0,
  preco: 0,
  rodas: 4,
};

const fusca = carros;

// function Carro(marca, portas, valor, kmRodados) {
//   // return 'oi'
//   this.marca = marca;
//   this.portas = portas;
//   this.valor = valor;
//   this.kmRodados = kmRodados;
// }

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = 'marca';
  this.preco = precoFinal;
}

const honda = new Carro('Honda', 25000);
const fiat = new Carro('Fiat', 15000);

// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   },
// }

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  };
  this.ativar = function() {
    this.element().classList.add('ativo');
  };
  this.desativar = function() {
    this.element().classList.remove('ativo');
  };
}


const li = new Dom('li');
li.ativar();
const ul = new Dom('ul');
ul.ativar();
const lastLi = new Dom('li:last-child');
lastLi.ativar();