require('./db/connect');
//set up server
const express = require("express");
const app = express();

//import routes
const tasks = require('./routes/tasks')
//need to access json data sent from thefrontend. middleware! get access to req.body
//middleware
app.use(express.json())

//routes. 
//think about the functionality of your page. editing? posting? deleting?
///api/v1/tasks is a convention, signals that all of them are the api routes. v1 just allows you to update as you keep working. 
//*be consistent with routes for your users!
//important b/c we are creating a server, so we want to create an https interface. this allows frontend to interact with our data.
//REST API representational state transfer. 
//our users can complete CRUD operations

app.get('/hello', (req, res) => {
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)

const port = 3000;
app.listen(port, console.log(`server is listening on ${port}...`));
