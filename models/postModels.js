const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    ip: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
