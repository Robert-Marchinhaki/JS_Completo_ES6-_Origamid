// escopo de função

var carro = 'Fusca'

function mostrarCarro () {
  var frase = `Meu carro é um ${carro}`
  console.log(frase)
}

console.log(mostrarCarro())
console.log(carro)

// escopo de bloco (variáveis declaradas com var vazam do escopo de bloco, por isso a melhor forma de declarar uma variável é utilizando const ou let)

if(true) {
  var carro2 = 'Ford Ka'
  let carro3 = 'Citroen C3'
  console.log(carro2)
  console.log(carro3)
}
console.log(carro2)
//console.log(carro3) // erro, carro3 is not defined

{
  var carro4 = 'Audi Gt'
  let carro5 = 'Citroen Civic'
}

console.log(carro4)
//console.log(carro5)

let i = 50

/*for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`)
}

console.log(i * 10)*/


// const 

const mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29 // funciona
//data = 'Janeiro' // erro

// let

let ano;
ano = 2018;
ano++;
console.log(ano)

//let ano = 2020; // erro, redeclarou a variável