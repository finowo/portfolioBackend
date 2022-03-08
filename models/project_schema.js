const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  },
  website: {
    type: String,
  },
  tags: {
    type: [String],
  },
  images: {
    type: [String],
  },
  date: {
    type: Date,
  },
  demo: {
    type: String,
  },
  links: {
    type: Object,
  },
});

module.exports = model("Project", projectSchema);
