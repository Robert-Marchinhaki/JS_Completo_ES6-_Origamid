const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const carros = new Array('Corola', 'Mustang', 'Honda');

console.log(carros[1]);// Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
console.log(carros.length); // 11;
console.log(carros[2]);
console.log(carros[10]);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
console.log(li)
console.log(arrayLi)

const obj = {
  0: 'Robert',
  1: 'Adrian',
  2: 'Marchinhaki',
  3: 'Da',
  4: 'Silva',
  length: 5, // é necessário ter para transformar um obj em um array
}

const objArray = Array.from(obj);
console.log(objArray)
let nomeCompleto = '';
objArray.forEach((item) => {
  nomeCompleto += ' ' + item
})
console.log(nomeCompleto)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2
frutas[2][0].length; // 8

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const instrumentosOrdenados = instrumentos2.sort();
console.log(instrumentosOrdenados);

