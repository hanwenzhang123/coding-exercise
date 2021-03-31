// Can only contain letters a-z in lowercase
function isValidUsername(username) {
  return /^[a-z]+$/.test(username) //^$ stating from beginning to end lower case. accepting any letter more than one [a-z]+
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  return /[a-z]/.test(password) && 
        /[A-Z]/.test(password) && 
        /[0-9]/.test(password) 
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password);
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
  return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
  // \D matches any non-numerial, * matches more than one. this code allows various formats including space and -
  // previous one /^\(\d{3}\)\s\d{3}-\d{4}$/ does not allow various types of phone number
  // If you want to match a literal parenthesis you can escape it with a \ 
}

// Must be a valid email address
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  // [^@] anything that is not a @
}

// FORMATTING FUNCTIONS


function formatTelephone(text) {       //return to the formatted function for phone number
  const expression = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  return text.replace(expression, "($1) $2-$3");
}
