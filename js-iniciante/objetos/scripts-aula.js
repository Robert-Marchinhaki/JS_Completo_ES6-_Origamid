var pessoa = {
  nome: 'Robert',
  idade: 19,
  cidade: 'Curitiba-pr',
  Faculdade: false
  
}

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimeter(lado) {
    return this.lados * lado
  } 
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimeter(5))

console.log(Math.PI)
console.log(Math.random())

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2
  },
}

menu.backgroundColor = '#000'
menu.color = 'blue'
var bg = menu.backgroundColor;
console.log(bg)
console.log(menu.color)
console.log(menu.metadeHeight())