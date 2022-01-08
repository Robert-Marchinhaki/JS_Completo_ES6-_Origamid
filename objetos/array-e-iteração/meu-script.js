// Selecione cada curso e retorne uma array

// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const listaCursos = document.querySelectorAll('.curso');
const arrayCurso = Array.from(listaCursos);

function HandleCourse(curso) {
  this.arrayAulas = [[
    'primerioCurso',
    {
    titulo: 'titulo1',
    descricao: 'descricao',
    aulas: 0,
    horas: 0,
  }], 
  ['segundoCurso', 
  {
    titulo: 'titulo2',
    descricao: 'descricao',
    aulas: 0,
    horas: 0,
  }],
  ['terceiroCurso', 
  {
    titulo: 'titulo3',
    descricao: 'descricao',
    aulas: 0,
    horas: 0,
  }
]];
  curso.filter((item, index) => {
    const cursos = arrayCurso[index].children;
    const cursoArray = Array.from(cursos);
  if (index === 0) { // primeiro curso
    cursoArray.forEach((item, index) => { 
      item = item.innerHTML;
      if (index === 0) {
        this.arrayAulas[0][1].titulo = item;
      } else if (index === 1) {
        this.arrayAulas[0][1].descricao = item;
      } else if (index === 2) {
        this.arrayAulas[0][1].aulas = item;
      } else {
        this.arrayAulas[0][1].horas = item;      
      }
      return this.arrayAulas
    }); 
  }
  if(index === 1) { // segundo curso
    cursoArray.forEach((item, index) => {
      item = item.innerHTML;
      if (index === 0) {
        this.arrayAulas[1][1].titulo = item;   
      } else if (index === 1) {
        this.arrayAulas[1][1].descricao = item;
      } else if (index === 2) {
        this.arrayAulas[1][1].aulas = item;
      } else {
        this.arrayAulas[1][1].horas = item ;     
      }
      return this.arrayAulas
  });
  } 
  if(index === 2) { // terceiro curso
    cursoArray.forEach((item, index) => { 
      item = item.innerHTML;
      if (index === 0) {
        this.arrayAulas[2][1].titulo = item;    
      } else if (index === 1) {
        this.arrayAulas[2][1].descricao = item;
      } else if (index === 2) {
        this.arrayAulas[2][1].aulas = item;
      } else {
        this.arrayAulas[2][1].horas = item ;     
      }
      return this.arrayAulas
    });
  } 
})
  return console.log(this.arrayAulas)
};
HandleCourse(arrayCurso);



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaior100 = numeros.filter(n => n > 100);
console.log(numerosMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const verificaInstrumento = instrumentos.some((instrumento) => { 
  return instrumento === 'Baixo';
});
console.log(verificaInstrumento);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let valorCompras = 0;
const preco = compras.forEach((item) => {
  item = +item.preco.toUpperCase().substring(3).replace(',', '.');
  valorCompras += item;
})

console.log(valorCompras);