const books = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Object.getPrototypeOf(Books).getInfo = function () {
  if (this.status === "reading") {
    status = "currently reading";
  } else {
  }
  return `${this.name} by ${this.author}, ${this.pages}, ${status}`;
};

function addBook(book) {
  books.push(book);
}
