// This is where the books are stored
const BOOKS = [];

// Book object constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Returns the info of the book invoking this function
Book.prototype.getInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${status}`;
};

// Adds a book to the BOOKS array
function addBook(book) {
  BOOKS.push(book);
}

// Displays the books in the BOOKS array
function displayBooks() {
  const bookGrid = document.querySelector(".book-grid");

  for (let index = 0; index < BOOKS.length; index++) {
    let book = BOOKS[index];
    let element = `
    <div class="book">
      <p class="status">${book.status}</p>
      <div class="img-box">
        <img class="book-cover" src="cover.jpg" alt="book-img" />
      </div>
      <div class="text-box">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
     </div>
   </div>`;

    bookGrid.innerHTML += element;
  }
}

window.onload = () => {
  // DUMMY BOOKS
  const witcher = new Book("The witcher", "Ryan", 255, "read");
  const mol = new Book("Mother of Learning", "Luis", 244, "read");
  const sherlock = new Book("Sherlock Holmes", "Ryan", 421, "not read");
  const tlm = new Book("The Legendary Mechanic", "Chocolion", 1231, "reading");

  addBook(witcher);
  addBook(mol);
  addBook(sherlock);
  addBook(tlm);

  displayBooks();
};
