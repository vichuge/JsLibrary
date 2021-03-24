let myLibrary = []

function Book(name, author, numpages, read) {
    this.name = name;
    this.author = author;
    this.numpages = numpages;
    this.read = read;
}

function addBookToLibrary() {
    let name = $('#name').val()
    let author = $('#author').val()
    let numpages = $('#numPages').val()
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
                //    'Author: ' + myLibrary[i].author,
                className: 'col-4'
            }),
            d.append('<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+myLibrary[i].name+'</h5><h6 class="card-subtitle mb-2 text-muted">'+myLibrary[i].author+'</h6><p class="card-text">Pages:'+myLibrary[i].numpages+', read?: '+myLibrary[i].read+'</p><a onClick="deleteBook('+i+')" class="card-link">Delete</a></div></div>')
        );
        
        //console.log(myLibrary[i])
    }
}

function deleteBook(id) {
    myLibrary.splice(id, 1)
    listBooks()
}

$(document).ready(function () {
    listBooks()
});
