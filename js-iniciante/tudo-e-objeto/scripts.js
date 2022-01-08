var frase = 'Lorem ipsum dolor sit.'

console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.length)

var btn = document.querySelector('.btn')
console.log(btn.classList.add('azul'));
console.log(btn.className.length)
console.log(btn.normalize())
btn.addEventListener('click', function() {
  console.log('clicou')
})
console.log(btn.after())