//import models
const Task = require("../models/Task");

//middleware
const asyncWrapper = require("../middleware/async");

//controllers

//fetch all tasks
//sending back an object to the front end, hence {tasks} not (tasks)
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  //....json({tasks, amount tasks.length})
  //....json({success: true, data: {tasks}}) //need to add success false in error message
});

//add a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

//get one task
//have to implement a specific response if the id doesn't match any id we have. why two errors? simply use you can have two types of errors
const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `cannot find task with id of ${taskId}` });
  }
  res.status(200).json({ task });
});

//edit task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const data = req.body;
  //pass in options!
  const task = await Task.findOneAndUpdate({ _id: taskId }, data, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `no task with id: ${taskId}` });
  }
  res.status(200).json({ task });
});

//delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: `cannot find task id: ${taskId}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
