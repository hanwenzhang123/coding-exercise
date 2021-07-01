//object-oriented approach

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

"hello, world!".capitalize();

//"Hello, World!"



function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}


function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
capitalize("alfredo")  // => "Alfredo"
capitalize("Alejandro")// => "Alejandro
capitalize("ALBERTO")  // => "Alberto"
capitalize("ArMaNdO")  // => "Armando"


//css code

p:first-letter {
    text-transform:capitalize;
}
