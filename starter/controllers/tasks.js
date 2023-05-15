//import models
const Task = require('../models/Task')

//controllers
const getAllTasks = (req, res) => {
  res.send("get All Items");
};

const createTask = async (req, res) => {
  console.log(req.body)
  try{
    const task= await Task.create(req.body);
    res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg: 'There was an error'});
    }
};

const getSingleTask = (req, res) => {
  res.json({id:req.params.id });
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
