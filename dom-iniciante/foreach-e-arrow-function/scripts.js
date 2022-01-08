// mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');

// paragrafos.forEach(item => console.log(item));

// mostre o texto dos parágrafos no console
const texto = document.querySelectorAll('p')
// texto.forEach((item) => console.log(item.innerText))

// como corrigir os erros abaixo 
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));