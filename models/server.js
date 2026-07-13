const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://kamanasaipoojitha22_db_user:yBzEZIIEMIKcC5Y1@cluster0.fce6r3q.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});