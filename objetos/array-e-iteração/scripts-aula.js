const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(`O carro ${item} está na posição ${++index}.\nDentro de ${array}`)
  array.push('camaro')
})
console.log(carros)

const li = document.querySelectorAll('li');

const retornoForEach = li.forEach((item, index) => {
  item.classList.add('ativo' + index)
});

const retornoMap = carros.map((item) => {
  return 'Carro ' + item
})
console.log(retornoMap)
console.log(retornoForEach);

const aulasTempo = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulasTempo.map((item) => item.min)
console.log(tempoAulas);

function nomeAulas(aula) {
  return aula.nome;
}

const nomeAulas1 = aulas => aulas.nome;

const nomesAulas = function(aula) {
  return aula.nome;
}

const arrayNomeAula = aulasTempo.map(nomesAulas)

console.log(arrayNomeAula)

const notas = [10, 25, 30];

const total1 = notas.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0) // colocando o 0 (zero) ele faz três iterações pelo laço
console.log(total1);

const numeros = [15, 231, 13, 62, 220, 40];

const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
})
console.log(maiorNumero);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {})

console.log(listaAulas);

const frutas = ['Banana', 'Uva', 'Pera'];


const strFrutas = frutas.reduceRight((acumulador, fruta) => {
  return acumulador + ' ' + fruta
});

const temUva = frutas.some((item) => {
  return item === 'Uva';
});

const arrayCheia = frutas.every((fruta) => {
  return fruta;
}) 

console.log(temUva);
console.log(arrayCheia);

const numeros1 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n >= 6);
// const maiorQue6 = numeros.every(function(n) {
//   return n >= 6
// });
console.log(maiorQue3);

const buscaMaior = numeros.find(x => x > 45);
console.log(buscaMaior);

const frutasNovas = ['Banana', 'maçã', 'Uva', 'Pera'];
const buscaUva = frutasNovas.findIndex((fruta) => {
  return fruta === 'Pera';
});
console.log(buscaUva);

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayLimpa = frutas2.filter(fruta => fruta);
console.log(arrayLimpa);

const numeros3 = [6, 43, 22, 88, 101, 29];

const buscarMaior45 = numeros.filter(n => n > 45);
console.log(buscarMaior45);

const aulasMin = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const minMaior = aulasMin.filter(minuto => {
  return minuto.min >= 15;
});
console.log(minMaior);