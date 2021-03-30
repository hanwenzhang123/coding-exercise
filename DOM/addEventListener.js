//The div with the ID colorDiv should change red when the red button is clicked, and blue when the blue button is clicked.

const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
  const colorSquare = document.getElementById('colorDiv');

redButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'blue';
})
