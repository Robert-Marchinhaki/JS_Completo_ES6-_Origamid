function somar(numero1, numero2) {
  return numero1 + numero2
}

console.log(somar(5, 8))

function imc(peso, altura) {
  const imc = peso / (altura ** altura);
  return imc;
}

console.log(imc(55, 1.75))

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do céu';
  } else if (cor == 'amarelo') {
    return 'Você gosta do sol';
  } else {
    return 'Você não gosta de nada'
  }
}

console.log(corFavorita('azul'))

addEventListener('click', function(){
  console.log('clicou')
})