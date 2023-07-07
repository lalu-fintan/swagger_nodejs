const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      uniquie: true,
    },
    price: {
      type: Number,
      required:true
    },
    description: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
