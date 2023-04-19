const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Napisz skrypt, który dla każdego elementu tablicy ingredients:
const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
const item = document.createElement('li');
// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
item.textContent = ingredient;
// 3. Doda do elementu klasę item.
item.classList.add('item');
// 4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
list.append(item);
});