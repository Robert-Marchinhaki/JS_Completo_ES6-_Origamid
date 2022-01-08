const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);

const img = document.querySelectorAll('img');
console.log(img[0]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

console.log('-------------------------------')
console.log(gridSectionHtml[0]);
console.log(gridSectionNode[0]);

console.log('-------------------------------')
gridSectionNode.forEach(function(item, index){
  console.log(item)
});

console.log('-------------------------------')
const arrayGrid = Array.from(gridSectionHtml);
arrayGrid.forEach(function(item, index){
  console.log(item)
})