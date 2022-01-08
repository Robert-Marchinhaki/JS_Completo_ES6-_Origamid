function isTruthy(value) {
  return !!value
}

console.log(isTruthy(1))

function squarePerimeter(perimeter) {
  return perimeter * 4
}

console.log(squarePerimeter(4))

function nameComplete(name, surname) {
  return `Seu nome completo é ${name} ${surname}`;
}

console.log(nameComplete('Robert', 'Adrian'))

function isEven(num) {
  if (num % 2 == 0) {
    return 'O número informado é par';
  } else {
    return 'O número inforamdo é impar';
  }
}

console.log(isEven(2))

function typeValue(value) {
  return typeof value;
}

console.log(typeValue('t'))

addEventListener('click', function() {
  return console.log('Robert adrian Marchinhaki da Silva');
})

function needVisit(countriesVisited) {
  var totalCountries = 193;
  console.log(`Ainda faltam ${totalCountries - 
    countriesVisited} países para visitar`);
  function visited() {
    return `Já visitei ${countriesVisited} de ${totalCountries} países`;
  }
  return visited();
}

console.log(needVisit(20))