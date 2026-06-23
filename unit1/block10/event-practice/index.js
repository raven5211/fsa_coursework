const button = document.querySelector("#clickable");
button.addEventListener("click", () => {
  console.log("Hello World");
});

///////////////////////////////////////////////////////////
const words = [];
render();

const submitButton = document.querySelector("form button");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const word = data.get("word");
  words.push(word);
  render();
});

function wordToHTML(word) {
  const wordHTML = document.createElement("li");
  wordHTML.innerHTML = `${word}`;
  return wordHTML;
}

function wordsToHTML(wordList) {
  const wordsHTML = document.createElement("ul");
  const wordHTMLArr = wordList.map(wordToHTML);
  wordsHTML.replaceChildren(...wordHTMLArr);
  return wordsHTML;
}

function render() {
  const div = document.querySelector(".wordList");
  const wordsHTML = wordsToHTML(words);
  div.innerHTML = `
    <h1>Word List</h1>
    <ul></ul>
  `;
  div.querySelector("ul").replaceWith(wordsHTML);
}
