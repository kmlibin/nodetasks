const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://KelliAL:Aguq9u0TY5HuSUvJ@nodeexpressproject.ff2yxap.mongodb.net/NodeExpressProject?retryWrites=true&w=majority";

//1st arg, connection string, 2nd arg is options...these options removed all the deprecation warnings
const connectDB = (url) => {
    mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
}
   
  //refactor because right now, the app starts, then database starts. we want it the other way around, that way if
  //we don't connect to DB, the app doesn't load. so, now we invoke mongoose connect in app.js...set it up as a function so
  //we can just invoke it.

  module.exports = connectDB