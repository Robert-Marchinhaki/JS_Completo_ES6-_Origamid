//window.alert('Isso mesmo')

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id do elemento;
titulo.offsetHeight; // retorna a altura do elemento;


// ativa a função de callbck ao click no título;

function callbackh1() {
    console.log('Clicou em ', titulo.innerText)
}

titulo.addEventListener('click', callbackh1)