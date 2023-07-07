const express = require("express");
const {
  createBook,
  getAllBooks,
  getByIdBooks,
  updateBook,
  deleteBook,
  quaryId,
} = require("../controllers/booksController");

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getByIdBooks);
router.get('/userquary',quaryId)
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
