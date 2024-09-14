class Book {
    constructor(isbn, title, author, year) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Book titled "${book.title}" added to the library.`);
    }

    // Remove a book from the library by ISBN
    removeBook(isbn) {
        const bookIndex = this.books.findIndex(book => book.isbn === isbn);
        if (bookIndex !== -1) {
            const removedBook = this.books.splice(bookIndex, 1)[0];
            console.log(`Book titled "${removedBook.title}" removed from the library.`);
        } else {
            console.log(`Book with ISBN "${isbn}" not found.`);
        }
    }

    // Find a book by title
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (foundBook) {
            return `Book found: ${foundBook.title}, by ${foundBook.author} (ISBN: ${foundBook.isbn}, Year: ${foundBook.year})`;
        } else {
            return `Book titled "${title}" not found.`;
        }
    }
}

// Example usage:
const library = new Library();
const book1 = new Book('978-3-16-148410-0', 'JavaScript Basics', 'John Doe', 2021);
const book2 = new Book('978-1-23-456789-0', 'Advanced JavaScript', 'Jane Doe', 2022);

// Adding books
library.addBook(book1);
library.addBook(book2);

// Finding a book by title
console.log(library.findBookByTitle('JavaScript Basics'));

// Removing a book by ISBN
library.removeBook('978-3-16-148410-0');

// Trying to find a removed book
console.log(library.findBookByTitle('JavaScript Basics'));
