const computador = {
  pentesMemRam: '',
  placaMae: '',
  placaDeVideo: '',
  processador: '',
  discoGravacao: '', 
  gabinete: ''
}

const meuComputador = Object.create(computador);
meuComputador.pentesMemRam = '1x8gb Team group e 1x8Gb Juhor';
meuComputador.placaDeVideo = 'RX550 4Gb';
meuComputador.placaMae = 'h310m H2.0';
meuComputador.gabinete = 'Gabinete Gamer Aigo DarkFlash';
meuComputador.processador = 'Pentium G5400';
meuComputador.discoGravacao = '2x HD320Gb, 1x SSD 240Gb';

// console.log(meuComputador);
// console.log(computador);

const carro1 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' Buzinou';
  },
}


const honda = Object.create(carro1);
;
console.log(honda.init('Honda').buzinar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  }
}

const moto = {
  rodas: 2,
  capacete: true,
}

moto.rodas = 5;
moto.capacete = false;

const carro = {
  rodas: 4,
  malas: true,
}

console.log(Object.assign(moto, funcaoAutomovel));
Object.assign(carro, funcaoAutomovel);

const novaMoto = {}

Object.defineProperties(novaMoto, {
  rodas: {
    // value: 2,
    get() {
      // return 2;
      return this._rodas 
    },
    set(valor) {
      this._rodas = valor * 2;
    },
    configurable: false, // Já vem falso por padrão (impede mudar/deletar o valor)
    enumerable: true, // torna enumerável
  },
  
  capacete: {
    value: true,
    configurable: true, // consegue deletar o valor
    writable: false, // impede mudança de valor
  }
})

novaMoto.rodas = 5;
novaMoto.capacete = false;
// delete novaMoto.capacete
novaMoto.capacete = false;
console.log(novaMoto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

const propriedadesArray = Object.getOwnPropertyNames(Array);
console.log(propriedadesArray);

const frutas = ['Banana'];
console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas1 = ['Banana', 'Uva', 'Pêra'];
const frutas2 = ['Banana', 'Uva', 'Pêra'];

const novaFruta = frutas1;
console.log(Object.is(frutas1, frutas2));
console.log(Object.is(frutas1, novaFruta));

const novoCarro = {
  marca: 'marca',
  ano: 2018,
}

// Object.freeze(novoCarro);
// Object.seal(novoCarro);
Object.preventExtensions(novoCarro);
novoCarro.portas = 4;
novoCarro.marca = 'Honda';
delete novoCarro.marca;

console.log(novoCarro);
console.log(Object.isFrozen(novoCarro));
console.log(Object.isExtensible(novoCarro)); // só é extensible quando eu não defino


const novasFrutas = ['Banana', 'Uva'];
console.log(novasFrutas.constructor)

console.log(Object.getOwnPropertyNames(Array.prototype)); // lista com nome de todas as propiedas
console.log(novasFrutas.hasOwnProperty('map')); 
console.log(Array.hasOwnProperty('map'));
console.log(Array.prototype.hasOwnProperty('map'));
console.log(Array.prototype.propertyIsEnumerable('map'));
console.log(window.propertyIsEnumerable('innerHeight'));
console.log(Array.prototype.isPrototypeOf(frutas));

const frutasArray = ['Banana', 'Uva'];
frutasArray.toString(); // 'Banana,Uva'
typeof frutasArray; // object
Object.prototype.toString.call(frutasArray); // [object array]

const frase = 'Uma frase';
frase.toString(); // 'Uma frase'
typeof frase; // string
Object.prototype.toString.call(frase); // [object string]

const carroObjeto = {marca: 'Ford'};
carroObjeto.toString(); // [object Object]
typeof carroObjeto; // object
Object.prototype.toString.call(carroObjeto); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]




