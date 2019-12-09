var express = require('express');
var router = express.Router();
var fs = require('fs')
var library = require('../book_library.json')

/* GET books listing. */
router.get('/', (req,res) => {
  res.send(library);
});

router.get('/findByISBN/:isbn', (req,res)=> {
    const isbn = req.params.isbn;
    const book = library.filter((bk) => bk.isbn == isbn )
    if (book.length == 0) {
        res.status(400).send({error: "Book with ISBN " + isbn + " doesn't exist"})
    } else {
        res.send(book)
    }
    
})

router.patch('/rent/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    const book = library.filter((bk) => bk.isbn == isbn )

    if (book.length == 0) {
        res.status(400).send({error: "Book with ISBN " + isbn + " doesn't exist"})
    } else {
        book[0].rented = true;
        
        fs.writeFile('./book_library.json', JSON.stringify(library), err => {
            if (err) {
                console.log('Error writing file', err)
                res.status(400).send({error: "WriteFile Error",err})
            } else {
                console.log('Successfully wrote file')
                res.send(book)
            }
        })
    }
})

router.patch('/return/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    const book = library.filter((bk) => bk.isbn == isbn )

    if (book.length == 0) {
        res.status(400).send({error: "Book with ISBN " + isbn + " doesn't exist"})
    } else {
        book[0].rented = false;
        
        fs.writeFile('./book_library.json', JSON.stringify(library), err => {
            if (err) {
                console.log('Error writing file', err)
                res.status(400).send({error: "WriteFile Error",err})
            } else {
                console.log('Successfully wrote file')
                res.send(book)
            }
        })
    }
})

router.post('/create', (req,res) => {
    const isbn = req.body.isbn;
    const isValid = library.filter((bk) => bk.isbn == isbn )

    if (isValid.length != 0) {
        return res.status(400).send({error: "ISBN already exists"})
    }

    const book = req.body;
    library.push(book);
    fs.writeFile('./book_library.json', JSON.stringify(library), err => {
        if (err) {
            console.log('Error writing file', err)
            res.status(400).send({error: "WriteFile Error",err})
        } else {
            console.log('Successfully wrote file')
            res.send(book)
        }
    })
})

router.delete('/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    const lib = library.filter((bk) => bk.isbn != isbn )
    if (lib.length == library.length) {
        res.status(400).send({error: "Book with ISBN " + isbn + " doesn't exist"})
    } else {
        fs.writeFile('./book_library.json', JSON.stringify(lib), err => {
            if (err) {
                console.log('Error writing file', err)
                res.status(400).send({error: "WriteFile Error",err})
            } else {
                library = lib;
                console.log('Successfully wrote file')
                res.send({msg: "Succesfully delted file"})
            }
        })
    }
    
})

router.get('/find', (req,res) => {
    const query = req.query;
    if (query.isbn) {
        let out = library.filter((bk) => (bk.isbn || "").includes(query.isbn))

        if (out.length == 0) {
            res.status(400).send({error: "No Books found with the given ISBN"})
        } else {
            res.send({msg: out.length + " Books found", books:out})
        }
    } else if(query.author) {
        let out = library.filter((bk) => (bk.authors || []).some((at) => (at.toLowerCase() || "").includes(query.author.toLowerCase())))

        if (out.length == 0) {
            res.status(400).send({error: "No Books found with the given author"})
        } else {
            res.send({msg: out.length + " Books found", books:out})
        }
    } else if(query.title) {
        let out = library.filter((bk) => (bk.title.toLowerCase() || "").includes(query.title.toLowerCase()))

        if (out.length == 0) {
            res.status(400).send({error: "No Books found with the given title"})
        } else {
            res.send({msg: out.length + " Books found", books:out})
        }
    } else if(query.category) {
        let out = library.filter((bk) => (bk.categories || []).some((at) => (at.toLowerCase() || "").includes(query.category.toLowerCase())))

        if (out.length == 0) {
            res.status(400).send({error: "No Books found with the given category"})
        } else {
            res.send({msg: out.length + " Books found", books:out})
        }
    } else {
        res.status(400).send({error: "No Query given"})
    }
})
module.exports = router;
