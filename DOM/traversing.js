/* The <ul> stored in the variable list has a click event listener that targets each <button> in the list. 
Complete the code to add a class of highlight to a <p> element that's an immediate previous sibling of the button being clicked. */

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className = 'highlight';
  }
});

//add the class to it's immediate previous sibling i.e. p. - previousElementSibling
let p = e.target.previousElementSibling;
// add a class name - className
p.className = "highlight";




/* Select all child elements of section and assign them to the paragraphs variable.
Next, change the color of each child paragraph to blue.
(Remember: paragraphs is a collection of elements, so you'll first need to use a loop to access each element in the collection.) */

var section = document.querySelector('section');
var paragraphs = section.children;

for (let i=0; i < paragraphs.length; i++ ) { // Make sure to use semicolons and not commas here
  paragraphs[i].style.color= 'blue'; // Use paragraphs, not section, since that's the collection you're intending to modify
}

//opted to use a for/of loop 

for (let p of paragraphs) {
    p.style.color = 'blue';
}




Question 1 

<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
    </head>
    <link rel="stylesheet" href="style.css" />
    <body>
        <section>
            <h1>Making a Webpage Interactive</h1>
            <p>Things to Learn</p>
            <ul>
                <li><p>Element Selection</p><button>Highlight</button></li>
                <li><p>Events</p><button>Highlight</button></li>
                <li><p>Event Listening</p><button>Highlight</button></li>
                <li><p>DOM Traversal</p><button>Highlight</button></li>
            </ul>
        </section>
        <script src="app.js"></script>
    </body>
</html>


Question 2 

<!DOCTYPE html>
<html>
    <head>
        <title>Child Traversal</title>
    </head>
    <body>
        <section>
            <p>This is the first paragraph</p>
            <p>This is a slightly longer, second paragraph</p>
            <p>Shorter, last paragraph</p>
        </section>
        <footer>
            <p>&copy; 2019</p> 
        </footer>
        <script src="app.js"></script>
    </body>
</html>
