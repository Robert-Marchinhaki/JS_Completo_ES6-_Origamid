var idade = 19;
console.log(idade)

// operadores

var soma = 5 + 5
console.log(soma)
var subtracao = 10 - 5
console.log(subtracao)
var divisao = 5 / 5
console.log(divisao)
var multiplicacao = 5 * 5
console.log(multiplicacao)

// erros

var soma1 = '5' + 5 // == 55 (não é um número)
console.log(soma1)
var subtracao1 = '5' - 5 // converte a string
console.log(subtracao1)
var soma2 = 'Tenho 10 balas' / 2 // NaN (Not a Number)
console.log(isNaN(soma2)) // true (não é um número)

// Ordem de procedência

var calculo1 = 20 + 5 * 2 // 30
var calculo2 = (20 + 5) * 2 // 50
var calculo3 = 20 / 2 * 5 // 50
var calculo4 = 10 + 5 * 2 - 25 / 5 * (30 - 20) // -30
console.log(calculo4)

// Operadores Aritméticos Unários

var incremento1 = 5;
console.log(incremento1++) // decremento --
console.log(incremento1) 
var incremento2 = 10
console.log(++incremento2)
console.log(incremento2)

var idade = '19';
+idade;
console.log(+idade + 5)