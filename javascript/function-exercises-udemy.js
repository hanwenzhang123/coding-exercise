//multiple arguments

function isSnakeEyes(die1,die2) {
 if(die1 === 1 && die2 === 1) { 
console.log('Snake Eyes!');
 }else { 
console.log('Not Snake Eyes!'); 
}}


//return value

function multiply (number1, number2) {
    return number1 * number2;
}

// if true false
function isShortsWeather (temperature) {
    if (temperature >= 75) {
        return true;
    }
    else {
        return false;
    }
}

//last element

function lastElement (array) {
    if (array.length === 0) {
        return null;
    }
    else {
        return array[array.length - 1];
    }
}


//Capitalize

function capitalize(string) {
    let newString = string[0].toUpperCase();
    string = string.slice(1);
    return newString + string;

}

function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let sliceStr = str.slice(1);
    str = firstLetter + sliceStr;
    return str;
  
  
  
  
// sum array
  function sumArray (arg) {
    let sum = 0;
    for (let i = 0; i < arg.length; i++){
        sum += arg[i];
    }
    return sum;
}
}



//day of the week
function returnDay(num) {
    const week = ['','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let ind of week) {
        if (num < 1 || num > 7) {
            return null;
        }
        return week[num];
    }
}
