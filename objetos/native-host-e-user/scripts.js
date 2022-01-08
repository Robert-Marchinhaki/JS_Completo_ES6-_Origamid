// Liste 5 objetos nativos

// Object
// String
// Array
// Function
// if

// Liste 5 objetos do browser

// NodeList
// HTMLCollection
// Element
// Document
// window

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined' || document.webkitVisibilityState !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}