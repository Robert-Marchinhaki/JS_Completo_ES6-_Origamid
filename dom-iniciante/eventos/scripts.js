// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses link

const linksInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linksInternos);

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((link, index) => {
//     if (event.type === 'click') {
//       link.classList.add('ativo');
//       // console.log('links internos', linksInternos[index]);
//       console.log('link', this);
//       if (this != linksInternos[index]) {
//         link.classList.remove('ativo');
//       }
//     }
//   })
// }


function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}


linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})


// .addEventListener('click', handleLinks);


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');
// console.log(elements);

function handleELements(event) {
  // event.currentTarget.remove();
}
allElements.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', handleELements);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// Remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site

function handleText(event) {
  // console.log(event.key)
  if (event.key === 't') {
    document.documentElement.classList.toggle('big-text')
  }
}

window.addEventListener('keydown', handleText);
