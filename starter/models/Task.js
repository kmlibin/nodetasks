const mongoose = require("mongoose");

//set up structure for all of our docs in a collection. schema defines structure
//we can set up our properties as objects, and then also set up built-in validators
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//model is representation of the collection..it's a wrapper for a schema, provides an interface for the collection.
//name and schema. name is the singular name of the collection your model is for. mongoose auto looks for plura, lowercase version of
//your model name. Task, tasks
module.exports = mongoose.model("Task", TaskSchema);
