const mongoose = require("mongoose");

//1st arg, connection string, 2nd arg is options...these options removed all the deprecation warnings

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.error("Database connection error:", err));
};

//refactor because right now, the app starts, then database starts. we want it the other way around, that way if
//we don't connect to DB, the app doesn't load. so, now we invoke mongoose connect in app.js...set it up as a function so
//we can just invoke it.

module.exports = connectDB;
