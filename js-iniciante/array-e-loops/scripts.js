var brasilCopa = [1959, 1962, 1970, 1994, 2002]

for (i = 0; i < brasilCopa.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCopa[i]}`)
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

/*for (i = 0; i < frutas.length; i++) {
    console.log(`Quando chegar em pera eu paro, estou em: ${frutas[i]}`)
    if (frutas[i] === 'Pera') {
        console.log(`Cheguei na ${frutas[i]}, vou parar.`)
        break }
}

// colocando a última fruta da array em uma variável, sem remover a mesma da array*/

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

/*for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (i === frutas.length - 1) {
        var ultimaFruta = frutas[i];
        console.log('Eu sou a última fruta: ', ultimaFruta)
    }
}
console.log(ultimaFruta);*/