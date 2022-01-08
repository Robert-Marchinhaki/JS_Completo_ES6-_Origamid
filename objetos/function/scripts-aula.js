// const VerificaPerimetro = new Function('lado', 'return lado * 4');
// console.log(VerificaPerimetro(5));

// function somar(n1, n2){
//   return n1 + n2
// }

// console.log(somar.length)
// console.log(somar.name)
// console.log(somar(3, 3))

// const Carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// function DescricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// DescricaoCarro();
// DescricaoCarro.call();
// DescricaoCarro.call(Carro);

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li')
// }
// Dom.prototype.ativo.call(li, 'ativar');

// ul.ativo.call(li, 'ativo');

const frutas = ['Uva', 'Maçâ', 'Banana'];

Array.prototype.mostrarThis = function () {
  console.log(this)
}
Array.prototype.pop.call(frutas);
frutas.pop();

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.bind(li, (item) => {
   if (item.classList.contains('ativo')) {
     return true
   }

})

console.log(filtro())
// console.log(filtro);

const numeros = [33, 2345, 12, 15, 457];
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);
console.log($('ul'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao}km em ${tempo}seg`
  },
}

const honda = {
  marca: 'Honda',
}

const acelerarHonda = carro.acelerar.bind(honda, 100);

console.log(acelerarHonda(20));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80)

console.log(+imc(1.80, 70).toFixed(2));
console.log(+imc180(70).toFixed(2));