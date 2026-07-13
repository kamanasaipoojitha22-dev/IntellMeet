const express = require("express");
const mongoose = require("mongoose");
const Meeting = require("./models/Meeting");
const Message = require("./models/Message");
const User = require("./models/User");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://kamanasaipoojitha22_db_user:Poojitha22@cluster0.fce6r3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.send(users);
  } catch (error) {
    res.send(error);
  }
});
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.send("User Added Successfully");
  } catch (error) {
    res.send(error);
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.send("User Deleted Successfully");
  } catch (error) {
    res.send(error);
  }
});
app.put("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send("User Updated Successfully");
  } catch (error) {
    res.send(error);
  }
});
app.post("/meetings", async (req, res) => {
  try {
    const meeting = new Meeting(req.body);

    await meeting.save();

    res.send("Meeting Added Successfully");
  } catch (error) {
    res.send(error);
  }
});
app.post("/messages", async (req, res) => {
  try {
    const message = new Message(req.body);

    await message.save();

    res.send("Message Sent Successfully");
  } catch (error) {
    res.send(error);
  }
});
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();

    res.send(messages);
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});