// Por qual motivo o código abaixo retorna erros?

/*
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4
}
console.log(var, marca, portas);
*/

// Primeiro: console.log(var)? 'var' o quê? 
// Segundo: marca e portas estão fora do escopo


{
  let cor = 'preto';
  const marca = 'Fiat';
  let portas = 4
  console.log(cor, marca, portas);
}


// como corrigir o erro abaixo?

/*
function somarDois(x) {
  const dois = 2
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
*/

const dois = 2

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(4));

// O que fazer para retornar 500?

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total)