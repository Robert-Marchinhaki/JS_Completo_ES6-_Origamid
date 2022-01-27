const body = document.querySelector('body');


setInterval(() => {
  body.classList.remove('vermelho')
  body.classList.toggle('azul');
  if (!body.classList.contains('azul'))
    body.classList.add('vermelho')
}, 2000);

