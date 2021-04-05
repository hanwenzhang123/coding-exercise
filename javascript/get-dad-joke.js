const jokes = document.querySelector('#jokes')
const getDadJoke = async () => {
const config ={ header  { Accept: 'application/json'} }
const res = await axios.get ('URL')
const newLI = document.createElement('LI');
newLI.append(res.data.joke)
jokes.append(newLI)}"
	"const jokes = document.querySelector('#jokes');
const button = document.querySelector ('button');




const AddNewJokes = async () => {
console jokeText = await getDadJoke();
const newLI = document.createElement('LI');
newLI.append(jokeText);
jokes.append(newLI) }

const getDadJoke = async () => {
try{const config = {header: {Accept: ' application/json' }}
const res = await axios.get ('URL', config)
return res.data.joke; } 
catch(e) {return ""no jokes available""}

button.addEventListener ('click', addNewJoke)
