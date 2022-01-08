// duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const menuDuplicado = menu.cloneNode(true);
copy.appendChild(menuDuplicado);

// selecione o primeiro dt do dl de faq

const primeiroDt = document.querySelector('dt');
console.log(primeiroDt);

// selecione o primeiro dd referente ao primeiro dt

const primeiroDd = document.querySelector('dd');
console.log(primeiroDd);

// substitua o conteudo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;