const counterValue = document.getElementById('value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counter = 0;

incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
  counter--;
  counterValue.textContent = counter;
});