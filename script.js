function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function Library() {
  this.books = [];
  this.addBook = function (book) {
    this.books.push(book);
  };
  this.getBook = function (name) {
    for (book of this.books) {
      if ((book.name = name)) {
        return book;
      }
    }
  };
}

Book.prototype.getInfo = function () {
  if (this.status === "reading") {
    status = "currently reading";
  } else {
    status = this.status;
  }
  return `${this.name} by ${this.author}, ${this.pages}, ${status}`;
};

window.onload = () => {
  myLibrary = new Library();

  // DUMMY BOOKS
  const witcher = new Book("The witcher", "Ryan", 255, "read");
  const mol = new Book("Mother of Learning", "Luis", 244, "read");
  const sherlock = new Book("Sherlock Holmes", "Ryan", 421, "not read");
  const tlm = new Book("The Legendary Mechanic", "Chocolion", 1231, "reading");

  myLibrary.addBook(witcher);
  myLibrary.addBook(mol);
  myLibrary.addBook(sherlock);
  myLibrary.addBook(tlm);
};
