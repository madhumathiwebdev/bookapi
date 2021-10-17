const express = require("express");

// database
const Database = require("./database");

// initialization
const OurAPP = express();

OurAPP.use(express.json());

OurAPP.get("/", (request, response) => {
    response.json({ message: "Server is working!!!!!!" });
});

// Route    - /book
// Des      - To get all books
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
OurAPP.get("/book", (req, res) => {
    return res.json({ books: Database.Book });
});

// Route    - /book/:bookID
// Des      - To get a book based on ISBN
// Access   - Public
// Method   - GET
// Params   - bookID
// Body     - none
OurAPP.get("/book/:bookID", (req, res) => {
    const getBook = Database.Book.filter(
        (book) => book.ISBN === req.params.bookID
    );

    return res.json({ book: getBook });
});

// Route    - /book/c/:category
// Des      - to get a list of books based on category
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
OurAPP.get("/book/c/:category", (req, res) => {
    const getBook = Database.Book.filter((book) =>
        book.category.includes(req.params.category)
    );

    return res.json({ book: getBook });
});

// Route    - /book/c/:category
// Des      - to get a list of books based on authors
// Access   - Public
// Method   - GET
// Params   - authors
// Body     - none
/*
OurAPP.get("/book/au/:authors", (req, res) => {
    const getBook = Database.Book.filter((book) =>
        book.authors.includes(req.params.authors)
    );

    return res.json({ book: getBook });
});
*/



// Route    - /author
// Des      - to get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
OurAPP.get("/author", (req, res) => {
    return res.json({ author: Database.Author });
});

// Route    - /author
// Des      - to get  specific author 
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
/*
OurAPP.get("/aut/:id",(req,res) => {
    const getSpecificBook = Database.Book.filter((book) =>book.authors === req.params.id);
  
    if(getSpecificBook.length === 0){
        return res.json({error:`No book found for the ISBN of ${req.params.id}`,
      });
    }
    return res.json({book:getSpecificBook});
  });
*/

// Route    - /author
// Des      - to get  list of author based on a book
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
/*
OurAPP.get("/author/book/:isbn",(req,res) => {
    const getSpecificAuthor = Database.Author.filter((Author) => author.books.includes(req.params.isbn));
    if(getSpecificAuthor.length === 0){
       return res.json({error:`No author found for the book of ${req.params.isbn}`,
     });
   }
   return res.json({author:getSpecificAuthor});
   });
*/ 

/*
Route    /publications
description   get all publications
access        public
parameter     none
methods       get
*/
OurAPP.get("/publications",(req,res)=>{
 return res.json({publications: Database.Publication});
});

/*
Route    /publications
description  get specific publication 
access        public
parameter     none
methods       get
*/


/*
Route    /publications
description  to get a list of publication based on a book.
access        public
parameter     none
methods       get
*/


OurAPP.listen(4000,() => console.log("Server is running "));