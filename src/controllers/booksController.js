const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

const createBook = asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(200).json(book);
});

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json(error);
  }
});

const getByIdBooks = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json(error);
  }
});

// const quaryId = asyncHandler(async (req, res) => {
//   try {
//     const book = await Book.findById(req.query.id);
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });


const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json(error);
  }
});

const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndRemove(id, req.body);
    res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  createBook,
  getAllBooks,
  getByIdBooks,
  updateBook,
  deleteBook,
  quaryId
};
