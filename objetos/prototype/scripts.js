// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const robert = new Pessoa('Robert', 'Adrian', 19);
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

function acessarMetodos(nomeMetodo) {
  return nomeMetodo.prototype
}

const nodeList = new acessarMetodos(NodeList);
const htmlCollection = new acessarMetodos(HTMLCollection);
const documento = new acessarMetodos(Document);
console.log(nodeList)
console.log(htmlCollection)
console.log(documento)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // 'HTMLLIElement'
li.click; // 'Function'
li.innerText; // 'String'
li.value; // 'Number'
li.hidden; // 'Boolean'
li.offsetLeft; // 'Number'
li.click(); // undefined 

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String