const form = document.querySelector('form');
const list = document.querySelector('#list');
 
form.addEventListener ('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addInput (qtyInput.value, productInput.value)
    qtyInput.value = ""
    productInput.value = ""
} )
 
const addInput = (qtyInput, productInput) => {
    const newInput = document.createElement("li")
    newInput.innerText = `${qtyInput} ${productInput}`;
    list.appendChild(newInput); 
}
