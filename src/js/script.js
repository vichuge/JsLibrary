const myLibrary = [];

const Book = (name, author, numpages, read) => {
  return {
    name, author, numpages, read
  };
};

function listBooks() {
  document.getElementById('list').innerHTML = '';
  const d = document.getElementById('list');
  for (let i = 0; i < myLibrary.length; i += 1) {
    d.innerHTML += `
    <div class="col-5">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${myLibrary[i].name} ( ${myLibrary[i].numpages} pages)</h5>
          <h6 class="card-subtitle mb-2 text-muted">${myLibrary[i].author}</h6>
          <p class="card-text">Have you read it before? ${myLibrary[i].read}</p>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" onClick="deleteBook(${i})" class="card-link">Delete</button>
            <button class="btn btn-primary" onClick="readBook(${i})" class="card-link">Change read</button>
          </div>
        </div>
      </div>
    </div>`;
  }
}

function emptyInputs() {
  document.getElementById('name').value = '';
  document.getElementById('author').value = '';
  document.getElementById('numPages').value = '';
}

function closeModal() {
  document.getElementById('close').click();
}

function addBookToLibrary() {
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const numpages = document.getElementById('numPages').value;
  const read = document.getElementById('chk');

  const errors = document.getElementById('error');
  errors.innerHTML = '';
  if (name === '') {
    errors.innerHTML += 'Name can\'t be blank';
    return;
  }
  if (author === '') {
    errors.innerHTML += 'Author can\'t be blank';
    return;
  }
  if (numpages === '') {
    errors.innerHTML += 'Number pages can\'t be blank';
    return;
  }
  if (!Number.isInteger(parseInt(numpages, 10))) {
    errors.innerHTML += 'Number pages needs to be a number';
    return;
  }

  const book = Book(name, author, numpages, read.checked);
  myLibrary.push(book);
  listBooks();
  emptyInputs();
  closeModal();
}

function deleteBook(id) {
  myLibrary.splice(id, 1);
  listBooks();
}

function readBook(id) {
  myLibrary[id].read = !myLibrary[id].read;
  listBooks();
}
