const input = document.querySelector('#validation-input');
const length = input.dataset.length;
input.addEventListener('blur', () => {
  if (input.value.length === Number.parseInt(length)) {
   input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
   input.classList.remove('valid');
  }
});
