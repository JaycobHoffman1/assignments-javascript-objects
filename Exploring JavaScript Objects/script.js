// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};
console.log("Task 1 complete!");
// Task 2: Implement a method within the Book object to display book information.
Book.prototype.displayBookInformation = function() {
    console.log(`${this.title}, ${this.author}, ${this.pages}`);
};
console.log("Task 2 complete!");
// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.
const addNewBook = (title, author, pages) => {
    const book = new Book(title, author, pages);
    books.push(book);
    console.log("Book added!", book.displayBookInformation());
};
const searchForBook = (searchTitle) => {
    for (const book of books) {
        if (book.title == searchTitle) {
            console.log("Book found!", book.displayBookInformation());
            return;
        } else {
            console.log("Book not found.");
        };
    };
};
const books = [];
const title1 = "Harry Potter and the Sorcerer's Stone";
const title2 = "The Berenstain Bears Forget Their Manners";
const author1 = "J.K. Rowling";
const author2 = "Stan and Jan Berenstain";
const pages1 = 223;
const pages2 = 32;
const searchTitle1 = "Harry Potter and the Sorcerer's Stone";
const searchTitle2 = "Harry Potter and the Chamber of Secrets";
addNewBook(title1, author1, pages1);
addNewBook(title2, author2, pages2);
console.log("Current inventory:", books);
searchForBook(searchTitle1);
searchForBook(searchTitle2);
console.log("Task 3 complete!");
// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
const findBooksWithMoreThan100Pages = books => {
    const booksWithMoreThan100Pages = books.filter(book => book.pages > 100);
    console.log("Books with more than 100 pages:", booksWithMoreThan100Pages);
};
const addTitleAndAuthor = books => {
    const booksWithTitleAndAuthor = books.map(book => {
        book.title = `Title: ${book.title}`;
        book.author = `Author: ${book.author}`;
        return book;
    });
    console.log("Books with \"Title\" and \"Author\" added:", booksWithTitleAndAuthor);
}
findBooksWithMoreThan100Pages(books);
addTitleAndAuthor(books);
console.log("Task 4 complete!");