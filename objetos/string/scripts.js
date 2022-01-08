// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTaxas = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
  const valores = +transacao['valor'].replace('R$ ', '');
  if (transacao['descricao'].substring(0, 4).toUpperCase() === 'TAXA') {
    somaTaxas += valores;
  }else {
    recebimentoTotal += valores
  };
})
console.log(somaTaxas)
console.log(recebimentoTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';')
console.log(transportesArray)

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const removeSpan = html.split('span')
const novoHtml = removeSpan.join('a')
console.log(novoHtml)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const ultimoCaracter = frase.substring(frase.length - 1)
console.log(ultimoCaracter)

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => {
  console.log()
  if (item.trim().toLowerCase().substring(0, 4)  === 'taxa') {
    totalTaxas += 1
  }
})
console.log(totalTaxas)