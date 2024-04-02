const express = require("express");
const app = express();
const mongoose = require("mongoose");
const noteRouter = require("./src/routes/noteRouter");
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan());

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/note-app")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", noteRouter);

const port = 3033;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
