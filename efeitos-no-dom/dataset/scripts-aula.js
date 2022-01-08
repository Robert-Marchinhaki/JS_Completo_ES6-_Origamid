const div = document.querySelector('div');

div.dataset.cor = 'verde';
div.dataset.height = 1000;
div.dataset.animaScroll = 'left';
delete div.dataset.width;
console.log(div.dataset);
console.log(div.dataset.cor);