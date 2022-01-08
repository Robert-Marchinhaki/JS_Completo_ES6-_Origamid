// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// const animaisDescricao = document.querySelector('.animais-descricao').children;
// const arrayAnimais = Array.from(animaisDescricao);
// arrayAnimais[0].classList.add('show-down');


// arrayAnimais.forEach((item) => {
//   item.dataset.anime  = 'show-down';
//   item.dataset.anime += ' show-right'
// });


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// const animaisLista = document.querySelector('.animais-lista').children;
// const arrayAnimaisLista = Array.from(animaisLista);

// function classeShow(event) {
//   const numerosAnimais = +event.currentTarget.children[0].getAttribute('src').replace('img/imagem', '').replace('.jpg', '') - 1;
//   const contemAtivo = arrayAnimais[numerosAnimais].classList.contains('ativo');
//   if (contemAtivo && numerosAnimais <= 2) {
//     arrayAnimais[numerosAnimais].classList.add('show-down');
//     arrayAnimais.forEach((item) => {
//       if (item.classList.contains('ativo') === false) {
//         item.classList.remove('show-down');
//       };
//     })
//   } else {
//     arrayAnimais[numerosAnimais].classList.add('show-right');
//     arrayAnimais.forEach((item) => {
//       if (item.classList.contains('ativo') === false) {
//         item.classList.remove('show-right');
//       };
//     })
//  }
// }


// arrayAnimaisLista.forEach((item) => {
//   item.addEventListener('click', classeShow);
// })

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
