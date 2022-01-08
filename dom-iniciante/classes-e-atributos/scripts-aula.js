const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');
// menu.classList.remove('ativo')
if(menu.classList.contains('ativo')){
  menu.classList.add('azul');
} else {
  menu.classList.remove('azul');
}
// console.log(menu);

menu.className += ' vermelho';
 
const animais = document.querySelector('.animais');
console.log(animais.attributes.class);

const img = document.querySelector('img');

const possuiAlt = img.setAttribute('alt', 'é uma raposa');
console.log(img);