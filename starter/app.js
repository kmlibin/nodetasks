//set up server
const express = require("express");
const app = express();

//connect to db and .env variable
const connectDB = require("./db/connect");
require("dotenv").config();

//import routes
const tasks = require("./routes/tasks");

//need to access json data sent from thefrontend. middleware! get access to req.body
//middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(express.json());
app.use(express.static("./public"));

//routes.
//think about the functionality of your page. editing? posting? deleting?
///api/v1/tasks is a convention, signals that all of them are the api routes. v1 just allows you to update as you keep working.
//*be consistent with routes for your users!
//important b/c we are creating a server, so we want to create an https interface. this allows frontend to interact with our data.
//REST API representational state transfer.
//our users can complete CRUD operations

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

//start up database, spins up server if connection is successful
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
