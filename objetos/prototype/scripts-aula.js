function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  // this.andar = function() {
  //   return 'Andou pelo objeto';
  // } 
  // this.nadar = function() {
  //   return 'Nadou pelo objeto';
  // }
}

const andre = new Pessoa('André', 28 );

Pessoa.prototype.andar = function() {
  return 'Andou.';
}
Pessoa.prototype.nadar = function() {
  return 'Nadou.';
}

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B 
cidade.charAt(0); // R

String.prototype;

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo',];

const li = document.querySelectorAll('li');
const liArray1 = Array.prototype.slice.call(li);
const liArray2 = Array.from(li);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  }
}
 