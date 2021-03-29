const buttom = document.querySelector('button'); 
const h1 = document.query selector('h1');

button.addEventListener('click', fuction(){
const newColor = makeRandColor() 
document.body.style.backgroundColor = newColor; 
h1.innerText = newColor;})

const makeRandColor = () =>{
const r = Math.floor(Math.random()*256);
const g = Math.floor(Math.random()*256);
const b = Math.floor(Math.random()*256);
return `rgb(${r}, ${g}, ${b})`;}"
