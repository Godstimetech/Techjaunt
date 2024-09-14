class Book {
    constructor( title, author, isbn, available = true ) {
      this._title = title;
      this._author = author;
      this._isbn = isbn;
      this._available = available;
    }

  
    borrowBook() {
      if (this._available) {
        this._available = false;
        console.log(`You have borrowed ${this._title} by ${this._author}.`);
      } else {
        console.log(`${this._title} by ${this._author} is not available.`);
      }
    }
  
    returnBook() {
      this._available = true;
      console.log(`You have returned ${this._title} by ${this._author}.`);
    }
  }
  
  