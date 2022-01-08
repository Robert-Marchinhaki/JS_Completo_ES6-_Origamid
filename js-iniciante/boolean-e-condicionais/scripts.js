// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 27;
var idadePrimo = 26;

if (minhaIdade > idadePrimo) {
  console.log('Eu sou mais velho que meu primo');
} else if (minhaIdade === idadePrimo) {
  console.log('Eu e meu primo temos a mesma idade');
} else {
  console.log('Meu primo é mais velho que eu')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log('O valor retornado foi: ', expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
console.log('Nome é', !!nome)
var idade = 28;
console.log('Idade é', !!idade)
var possuiDoutorado = false;
console.log('Possui doutorado é', !!possuiDoutorado)
var empregoFuturo;
console.log('Emprego futuro é', !!empregoFuturo)
var dinheiroNaConta = 0;
console.log('Dinheiro na conta é', !!dinheiroNaConta)



// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('China tem mais habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}