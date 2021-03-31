/*In this challenge you'll write a validator for a hexadecimal string used to set a CSS color. 
Hexadecimal values for css colors start with a pound sign, or hash (#), then six characters that can either be a numeral or a letter between A and F, inclusive. Two examples of these strings would be #FF4569 and #578E9A. 
For this step of the challenge, write a regular expression that will match any hexadecimal string and store it in a variable named hexRegEx. The regex should be case-insensitive. Assume that the string will always be 7 characters.
Now, use the test() method to test the string in text against the regular expression you just created. Remember the test() method returns a true or false value. 
Return the result of testing the string from the isValidHex method */

function isValidHex(text) {
const hexRegEx = /^#[a-f0-9]{6}$/i;  // answer here
    return hexRegEx.test(text)
}

const hex = document.getElementById("hex");
const body = document.getElementsByTagName("body")[0];

hex.addEventListener("input", e => {
  const text = e.target.value;
  const valid = isValidHex(text);
  if (valid) {
    body.style.backgroundColor = "rgb(176, 208, 168)";
  } else {
    body.style.backgroundColor = "rgb(189, 86, 86)";
  }
});
