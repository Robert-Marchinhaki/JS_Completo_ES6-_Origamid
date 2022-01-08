// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

function handleCaracter(elemento) {
  const elementoSelecionado = document.querySelectorAll(elemento);
  const elementoArray = Array.from(elementoSelecionado);
  const somaCaracter = elementoArray.reduce((anterior, posterior) => {
    return anterior + posterior.innerText.length;
  }, 0)
  return somaCaracter
}

console.log(handleCaracter('p'));

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function newElements(tag, classe, conteudo) {
  this.criarElemento = document.createElement(tag);
  this.criarConteudo = document.createTextNode(conteudo);
  this.elementoPai = document.body;
  this.elementoPai.appendChild(this.criarElemento); 
  this.criarElemento.appendChild(this.criarConteudo);
  this.criarElemento.classList.add(classe)
}



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

newElements.prototype.h1Titulo = function() {
  this.criarElemento.classList.add('titulo');
}

const p = new newElements('p');

const h1 = {
  criarElemento: document.querySelector('h1'),
}

h1.h1Titulo.call(h1, 'ativo')