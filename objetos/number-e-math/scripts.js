// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.random();
console.log(Math.floor(aleatorio * (2000 - 1050 + 1) + 1050));

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let maiorNumero = 0;
const numerosSeparados = numeros.split(', ');
numerosSeparados.forEach((item) => {
  if (maiorNumero < +item) {
    maiorNumero = item;
  } 
})

const numeroMaximo = Math.max(...numerosSeparados)
console.log(numeroMaximo)
console.log(maiorNumero);

console.log('---------------------')
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
const novosPrecos = [];

function limparPrecos(precos) {
  let precosLimpados = 0;
  let somaTotal = 0;
  precos.forEach((item, index) => {
    precosLimpados = +item.toUpperCase().replace('R$', '').trim().replace(',', '.');
    precosLimpados = +precosLimpados.toFixed(2)
    listaPrecos[index] = precosLimpados.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    somaTotal += precosLimpados;
  })
  console.log('soma dos preços: ' + somaTotal);
}        

limparPrecos(listaPrecos);
console.log(listaPrecos);