console.log('Height e width')
const listaAnimais = document.querySelector('.animais-lista');

const heighAnimais = listaAnimais.clientHeight; // height + padding
console.log(heighAnimais);

const offsetAnimais = listaAnimais.offsetHeight; // height + padding +   // border
console.log(offsetAnimais)

const scrollAnimais = listaAnimais.scrollHeight; // height total, mesmo  // dentro do scroll
console.log(scrollAnimais);

// os mesmos parâmetros servem para o width

const widthAnimais = listaAnimais.scrollWidth;
console.log(widthAnimais);

console.log('offsetTop e offsetLeft');

// Distância entre o topo do elemento e o topo da página
console.log(listaAnimais.offsetTop)

// Distância entre o canto esquerdo do elemento e o canto esquerdo da    // página

console.log(listaAnimais.offsetLeft);

console.log('getBoundingClientRect()');

const rect = listaAnimais.getBoundingClientRect();
console.log(rect);

// rect.heigth; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll

console.log('Window')

console.log(
  window.innerWidth, // width da janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height da janela
  window.outerHeight, // soma a barra de endereço

  window.pageYOffset, // distância total do scroll horizontal
  window.pageXOffset, // distância total do scroll vertical
);
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)').matches;

if (small){
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}

