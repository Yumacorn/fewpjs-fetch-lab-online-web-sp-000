function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books', {mode: "no-cors"})
    .then(resp => resp.json())
    .then(json => renderBooks(json));
}

function renderBooks(json) {
  console.log("inRenderBooks");
  const main = document.querySelector('main');
  json.forEach(doodsoado => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${doodsoado.name}</h2>`;
    main.appendChild(h2);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})
