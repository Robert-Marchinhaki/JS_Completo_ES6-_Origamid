console.log('Verificar a distância da primeira imagem em relação ao topo da página');
const primeirImg = document.querySelector('img');
console.log(primeirImg.offsetTop);

console.log('Retorne a soma da largura de todas as imagens')
// let total = 0;
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item) {
//   // console.log(item.width);
//   total += item.width;
// });
// console.log(total);

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma)
}

window.onload = function() {
  somaImagens();
}

console.log('verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)')
const links = document.querySelectorAll('a');
links.forEach((link) => {
  if (link.offsetHeight < 48 && link.offsetWidth < 48) {
    console.log('Os links da página não possuem o mínimo recomendado para telas utilizadas com o dedo.');
  }
})

// se o browser for menor que 720px, adicione a classe menu-mobile ao menu
let menu = document.querySelector('.menu');
if (window.innerWidth < 720) {
  menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
} else {
  menu.classList.remove('menu-mobile');
}