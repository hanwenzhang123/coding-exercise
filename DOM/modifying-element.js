//Select the <input> element with the ID linkName and store its value in the variable inputValue.
//Next, set the text content of the <a> element with the ID link to the value stored in inputValue.


let inputValue = document.querySelector('#linkName').value;
let link = document.getElementById('link');
link.textContent = inputValue;

let inputValue = document.querySelector('#linkName').value;
let a = document.querySelector('a');
a.textContent = inputValue;

/*
<!DOCTYPE html>
<html>
    <head>
        <title>DOM Manipulation</title>
    </head>
    <link rel="stylesheet" href="style.css" />
    <body>
        <div id="content">
            <label>Link Name:</label>
            <input type="text" id="linkName">
            <a id="link" href="https://teamtreehouse.com"></a>
        </div>
        <script src="app.js"></script>
    </body>
</html>
*/

