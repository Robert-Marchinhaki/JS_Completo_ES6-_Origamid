var videoGames = ['God of War', 'Ps5', 'Xbox'];
console.log(videoGames[2])

videoGames.pop(); // remove o último item
console.log(videoGames[2])

videoGames.push('Resident Evil'); // adiciona ao final do array
console.log(videoGames[2])

console.log(videoGames.length); 

console.log('-----------------------------')
console.log('laço for:')

var tabuada = 9
for (var numero = 1; numero <= 10; numero++) {
    console.log(tabuada * numero)
    }

console.log('-----------------------------')
console.log('laço while:')

var inicio = 0
   while (inicio <= 10) {
    console.log(inicio);
    inicio++;
}

var meusJogosFavoritos = ['Re4', 'God of War', 'God Hand', 'Valorant', 'WWZ', 'Star Wars', 'Forza Horizon']

console.log('Meu jogos favoritos são:')

/*for (var i = 0; i < meusJogosFavoritos.length; i++) {
    console.log(meusJogosFavoritos[i]);
    if (meusJogosFavoritos[i] === 'Valorant') {
        break;
    }
}*/

meusJogosFavoritos.forEach(function(item, n) {
    console.log(item, n+1);
});