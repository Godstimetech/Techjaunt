class Book {
    #isbn; // Private field for ISBN

    constructor(isbn, title, author, year) {
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getter for ISBN
    get isbn() {
        return this.#isbn;
    }

    // Setter for ISBN (optional, if you want to allow setting it under certain conditions)
    set isbn(newIsbn) {
        console.log("ISBN cannot be modified directly.");
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

// DigitalLibrary inheriting from Library
class DigitalLibrary extends Library {
    constructor() {
        super(); // Calls the constructor of the Library class
    }

    // Method to download a book by ISBN if available
    downloadBook(isbn) {
        const bookToDownload = this.books.find(book => book.isbn === isbn);
        if (bookToDownload) {
            console.log(`Downloading book titled "${bookToDownload.title}" (ISBN: ${bookToDownload.isbn})...`);
        } else {
            console.log(`Book with ISBN "${isbn}" not available for download.`);
        }
    }
}

// Example usage:
const digitalLibrary = new DigitalLibrary();
const book1 = new Book('978-3-16-148410-0', 'JavaScript Basics', 'John Doe', 2021);
const book2 = new Book('978-1-23-456789-0', 'Advanced JavaScript', 'Jane Doe', 2022);

// Adding books to the digital library
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);

// Trying to change the ISBN (this will be prevented)
book1.isbn = '111-1-11-111111-1';

// Finding a book
console.log(digitalLibrary.findBookByTitle('JavaScript Basics'));

// Downloading a book by ISBN
digitalLibrary.downloadBook('978-3-16-148410-0');

// Attempt to download a non-existent book
digitalLibrary.downloadBook('999-9-99-999999-9');
