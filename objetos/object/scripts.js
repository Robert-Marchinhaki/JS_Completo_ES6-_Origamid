// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dadoTipo) {
  return Object.prototype.toString.call(dadoTipo);
}

console.log(verificarDado([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  }
})

Object.preventExtensions(quadrado);
quadrado.lados = 3;
delete quadrado.lados;
quadrado.novolado = 9;
console.log(quadrado);


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
configuracao.width = 900;
configuracao.height = 900;
configuracao.background = '#000';

console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));