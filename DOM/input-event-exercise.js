let header = document.querySelector('h1');
let inputHere = document.querySelector('input');
 
inputHere.addEventListener('input',()=>{
    header.innerHTML = `Welcome, ${inputHere.value}`;
    if(inputHere.value === ''){
        header.innerHTML = ""Enter Your Username"";
    }
})
