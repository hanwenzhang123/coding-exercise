//This code should create a sequence of div elements that each hold a headline above and a link below. 

const languages = ['Python', 'JavaScript', 'PHP', 'Ruby', 'Java', 'C'];
const section = document.getElementsByTagName('section')[0];

// Accepts a language name and returns a wikipedia link
function linkify(language) {
  const a = document.createElement('a');
  const url = 'https://wikipedia.org/wiki/' + language + '_(programming_language)';
  a.href = url;
  return a;
}

// Creates and returns a div
function createDiv(language) {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const link = linkify(language);
  
  h2.textContent = language;
  p.textContent = 'Information about ' + language;
  link.appendChild(p);
  
  div.appendChild(h2);
  
  div.appendChild(link)
  
  return div;
}

for (let i = 0; i < languages.length; i += 1) {
  let div = createDiv(languages[i]);
  
  section.appendChild(div);
}




//HTML Code
<!DOCTYPE html>
<html>
<head>
  <title>Programming Languages</title>
  <style>
    body {
      font-family: sans-serif;
    }
  </style>
</head>
<body>
  <h1>Programming Languages</h1>
  <section></section>
  <script src="app.js"></script>
</body>
</html>
