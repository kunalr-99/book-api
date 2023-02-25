// Import express module
const express = require("express");
const { books, authors } = require("./database");

// Create instance of express (enable express)
const server = express();
server.use(express.json());
const port = 4000;

// Db connect

// http://localhost:4000 => he ghe tujhe posts
server.get("/", (request, response) => {
  response.json("Build book api");
});

// 1) Find all books (only name)
// url -> http://localhost:4000/books
// get request
server.get("/books", (req, res) => {
  const allBooksName = books.map((book) => book.title);
  return res.json({ data: allBooksName });
});

// 2) Find all authors (only name)
// url -> http://localhost:4000/authors
// get request
server.get("/authors", (req, res) => {
  const allAuthorsName = authors.map((author) => author.name);
  return res.json({ data: allAuthorsName });
});

// 3) Findbooks by genre
// url -> http://localhost:4000/genre/fiction
// route -> /genre/:type
// get request
server.get("/genre/:type", (req, res) => {
  const genre = req.params.type;
  const filteredBooks = books
    .filter((book) => book.genre.includes(genre)) // [genre books array]
    .map((book) => book.title);
  return res.json({ data: filteredBooks });
});

// 4) Find books by author name
// url -> http://localhost:4000/author/:name
// route -> /author/:name
// request -> get
server.get("/books/author/:name", (req, res) => {
  const { name } = req.params;
  const verifyAuthor = authors.filter((author) => author.name === name)[0]
    .bookName;
  return res.json({ data: verifyAuthor });
});

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
