// // adicione a classe ativo a todos itens do menu
const addClasseAtiva = document.querySelectorAll('.menu ul li a');

addClasseAtiva.forEach((item) => item.classList.add('ativo'))

// remova a classe ativo de todos os itens do menu e // mantenha apenas a primeira
const removeClasseAtiva = document.querySelectorAll('.menu ul li a');

console.log(removeClasseAtiva[0])

for (let i = 0; i < (removeClasseAtiva.length - 1); i++) {
  if (i > 0) {
    removeClasseAtiva[i].classList.remove('ativo');
  }
}

// Verifique se as imagens possui o atributo alt
const verificaAlt = document.querySelectorAll('img')
verificaAlt.forEach((item) => console.log(item.hasAttribute('alt')))

// Modifique o href do link externo no menu
const modificaHref = document.querySelector('a[href^="https"]')
modificaHref.setAttribute('href', 'https://www.youtube.com/')
