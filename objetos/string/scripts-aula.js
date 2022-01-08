const comida = 'Feijoada';
const banana = new String('Banana');
const frase = 'A melhor comida é ';

console.log(frase[frase.length - 1])

const linguagem = 'JavaScript';

console.log(linguagem.charAt(0))
console.log(linguagem.charAt(linguagem.length - 1))

const fraseMontada = frase.concat(comida, '. E a melhor linguagem de programação é ', linguagem, '.')
console.log(fraseMontada)

const fruta = 'banana';
const frutas = 'Melancia, banana, Laranja';
console.log(frutas.includes(fruta));

console.log(fruta.endsWith('nana'));
console.log(fruta.startsWith('ba'));
console.log(fruta.startsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(5, 7)); // Dep
console.log(transacao2.slice(3, 8)); // Dep
console.log(transacao3.slice(5)); // Tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao2.slice(-12)); // ente
console.log(transacao3.slice(5)); // ósi

console.log(fruta.indexOf('b'))
console.log(fruta.lastIndexOf('na'))

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

// console.log(listaPrecos[0].padStart(10, '.')); 
// console.log(listaPrecos[0].padEnd(10, '.'));

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section')

console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)