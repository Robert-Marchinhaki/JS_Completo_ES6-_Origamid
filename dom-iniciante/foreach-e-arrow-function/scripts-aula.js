// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//   //console.log(item, index, array) 
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  // console.log(item, index, array)
});

const img = document.querySelectorAll('img');

img.forEach((item, index, array)=> {
  // console.log(item, index, array) 
});

// primeira forma (quando não tem argumentos precisa do parentêses)
i = 0
img.forEach(() => {
  console.log(i++) 
});

// segunda forma (forma resumida)
img.forEach(() => console.log(i++));

// terceira forma (quando é apenas um argumento, não é necessário nem os parentêses nem as chaves)
img.forEach(item => console.log(item));
