const express = require("express"); 
const path = require("node:path");

require("dotenv").config(); 

const messageRouter = require("./routes/messageRouter"); 
const newMessageRouter = require("./routes/newMessageRouter");
const deleteRouter = require("./routes/deleteRouter"); 
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = process.env.PORT_EXPRESS || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter); 
app.use("/", newMessageRouter);
app.use("/", deleteRouter); 
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini Message Board - listening on port ${PORT}`);
});
