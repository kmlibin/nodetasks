const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://KelliAL:Aguq9u0TY5HuSUvJ@nodeexpressproject.ff2yxap.mongodb.net/NodeExpressProject?retryWrites=true&w=majority";

//1st arg, connection string, 2nd arg is options...these options removed all the deprecation warnings
mongoose
  .connect(connectionString, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
  .then(() => console.log("connected to database..."))
  .catch((err) => console.log(err));
