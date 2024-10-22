const Book = require('../models/Book')

exports.addBook = async (req, res)=>{
    const {name, author, price, description, quantity} = req.body;

    const book = new Book({
        name, author, price, description, quantity, image: req.file.path
    })
    await book.save()
    res.json(book);
}

exports.updateBookQuantity = async (req,res)=>{
    const {id,quantity}= req.body

    const book=await Book.findById(id)

    if(!book) return res.status(404).json({ message:  "Book not Found"})

        book.quantity = quantity;
        res.json(book)
}

exports.getBooks = async (req, res)=>{
    const books = await Book.find()
    res.json(books)
}