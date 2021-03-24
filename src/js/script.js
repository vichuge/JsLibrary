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

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

function listBooks() {
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
