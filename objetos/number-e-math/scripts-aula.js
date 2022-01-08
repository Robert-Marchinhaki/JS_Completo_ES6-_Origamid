console.log(Number.isNaN('de'));
console.log(Number.isInteger(10.33294));
console.log(parseInt(' 8293472.1819 reais'));
console.log(parseFloat('2398329.238238 reais'));

const preco = 10.32324;
console.log(+preco.toFixed());
console.log(+preco.toFixed(2));

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

console.log(Math.abs(-5.5));
console.log(Math.ceil(4.8830));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.floor(4.8840));
console.log(Math.round(4.8840));
console.log(Math.round(4.3));
console.log(Math.max(20, 32, 15, 31, 67, 26));
console.log(Math.min(15, 79, 13, 63, 46));

const aleatorio = Math.random();
console.log(Math.floor(aleatorio * 5))

// console.log(Math.floor(aleatorio * (max - min + 1) + min))
console.log(Math.floor(aleatorio * (72 - 32 + 1) + 32))