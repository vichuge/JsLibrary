let myLibrary = [
    {
        name: 'The lord of the rings',
        author: 'J. R. R. Tolken',
        numPages: 93,
        read: false
    },
    {
        name: 'Harry Potter',
        author: 'J. K. Rowling',
        numPages: 101,
        read: true
    }
]


function Book(name, author, numpages, read) {
    this.name = name;
    this.author = author;
    this.numpages = numpages;
    this.read = read;
    // the constructor...
}


function addBookToLibrary() {
    let name = $('#name'); 
    let author = $('#author');
    let numpages = $('#numPages')
    const book = new Book(name, author, numPages, false);
    
    myLibrary.push(book);
    // do stuff here
    listBooks();
    console.log(myLibrary);
}

function listBooks() {
    $('#list').empty()
    for (i = 0; i < myLibrary.length; i++) {
        $('#list').append(
            $('<div>').prop({
                innerHTML: 'Name: ' + myLibrary[i].name + '\r\n' +
                    'Author: ' + myLibrary[i].author,
                className: 'col-3'
            })
        );
        //console.log(myLibrary[i])
    }
}

$(document).ready(function () {
    listBooks()
});
