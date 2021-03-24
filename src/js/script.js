const myLibrary = [];

function Book(name, author, numpages, read) {
  this.name = name;
  this.author = author;
  this.numpages = numpages;
  this.read = read;
}

function addBookToLibrary() {
  const name = $('#name').val()
  const author = $('#author').val()
  const numpages = $('#numPages').val()
  const book = new Book(name, author, numpages, false)
  myLibrary.push(book)
  listBooks()
  emptyInputs()
  console.log(myLibrary)
}

function emptyInputs() {
  $('#name').val('')
  $('#author').val('')
  $('#numPages').val('')
}

function listBooks() {
  $('#list').empty()
  for (i = 0; i < myLibrary.length; i++) {
    $('#list').append(
      d = $('<div>').prop({
        //innerHTML: 'Name: ' + myLibrary[i].name + '\r\n' +
        //  'Author: ' + myLibrary[i].author,
        className: 'col-4'
      }),
      d.append('<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+myLibrary[i].name+' ('+myLibrary[i].numpages+' pages)</h5><h6 class="card-subtitle mb-2 text-muted">'+myLibrary[i].author+'</h6><p class="card-text">Have you read it before? '+myLibrary[i].read+'</p><div class="d-grid gap-2"><button class="btn btn-primary" onClick="deleteBook('+i+')" class="card-link">Delete</button><button class="btn btn-primary" onClick="readBook('+i+')" class="card-link">Change read</button></div></div></div>')
    );
    
    //console.log(myLibrary[i])
  }
}

function deleteBook(id) {
  myLibrary.splice(id, 1)
  listBooks()
}

function readBook(id) {
  myLibrary[id].read = !myLibrary[id].read
  listBooks()
}
$(document).ready(function () {
  listBooks()
});
