const display = document.querySelector('[data-temp]')
const init = document.querySelector('[data-init]');
const stop = document.querySelector('[data-stop]');
const reset = document.querySelector('[data-reset]');


let count = 0;
let timer;

function handleInit(event) {
  timer = setInterval(() => {
    display.innerText = count++;
  }, 1000)
  init.setAttribute('disabled', '')
}
function handleStop() {
  clearInterval(timer);
  init.removeAttribute('disabled')
}


function handleReset() {
  handleStop()
  display.innerText = 0;
  count = 0;
}


init.addEventListener('click', handleInit);
stop.addEventListener('click', handleStop);
reset.addEventListener('click', handleReset);
