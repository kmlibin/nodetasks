const mongoose = require("mongoose");

//set up structure for all of our docs in a collection. schema defines structure
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//model is representation of the collection..it's a wrapper for a schema, provides an interface for the collection.
//name and schema. name is the singular name of the collection your model is for. mongoose auto looks for plura, lowercase version of
//your model name. Task, tasks
module.exports = mongoose.model("Task", TaskSchema);

