// const h1 = document.querySelector('h1');
// const animalsList = document.querySelector('.animais-descricao');
// // console.log(h1.innerHTML);
// // console.log(h1.outerHTML);
// h1.innerHTML = '<p>Novo titulo</p>'
// // console.log(animalsList.innerText);

// const list = document.querySelector('.animais-lista');

// // console.log('Pai:', list.parentElement);
// // console.log('Pai do pai: ', list.parentElement.parentElement);
// // console.log('Elemento acima: ', list.previousElementSibling);
// // console.log('Elemento abaixo: ', list.nextElementSibling);

// // console.log('HTMLCollection com os filhos:', list.children);
// // console.log('primeiro filho:', list.children[0]);
// // console.log('último filho: ', list.children[--list.children.length]);

// list.querySelectorAll('li'); 
// list.querySelectorAll('li:last-child'); 

// const contact = document.querySelector('.contato');
// const title = contact.querySelector('.titulo');

// // contact.appendChild(list);  // move lista para o final de contato
// // contact.insertBefore(list, title);  // insere a lista antes de titulo
// // contact.removeChild(title); // remove o titulo de contato
// // contact.replaceChild(list, title); // substitui o titulo por lista

// const newH1 = document.createElement('h1');
// console.log(newH1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);




