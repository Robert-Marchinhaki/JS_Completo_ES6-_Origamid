var nome = 'Robert'
console.log(typeof nome)
var idade = 19
console.log(typeof idade)
var time = null
console.log(typeof time)
var simbolo = Symbol()
console.log(typeof simbolo)

// somando strings (concatenar)
var sobrenome = 'Adrian'
var nome_int = nome + ' ' + sobrenome
console.log('Meu nome é', nome_int, 'e eu tenho', idade, 'anos')

var my_info = 'Meu nome é ' + nome_int + ' e eu tenho ' + idade + ' anos'
console.log(my_info)

// Template string

var gols = 1000
var frase1 = 'Romário fez ' + gols + ' gols'
console.log(frase1)

var frase2 = `Romário fez ${gols} gols`
console.log(frase2)