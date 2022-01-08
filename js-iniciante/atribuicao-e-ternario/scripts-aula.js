var x = 5
var y = 10
x += y; //  x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y;  //  x = x ** y (9765625)

var idade = 17
var podeBeber = (idade > 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

// var condiçao = if ? true : false;

// if abreviado (Não é necessário abrir e fechar as chaves quando for somente uma linha de código)

var possuiFaculdade = true

if (possuiFaculdade === true) console.log('Possui faculdade');
else console.log('Não possui faculdade')

if (possuiFaculdade === true) {
  console.log('Possui faculdade');
} else {
  console.log('Não possui faculdade');
}