//import models
const Task = require("../models/Task");

//controllers

//fetch all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    //sending back an object to the front end, hence {tasks} not (tasks)
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};

//add a task
const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};

//get one task
//have to implement a specific response if the id doesn't match any id we have. why two errors? simply use you can have two types of errors
const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `cannot find task with id of ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};

//edit task
const updateTask = async (req, res) => {
  try {
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
    res.status(200).json({ taskId, data });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};

//delete task
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `cannot find task id: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: "an error occurred" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
