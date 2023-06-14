import express from "express";
import env from "dotenv";
import chats from "./data/data.js";

env.config();

const app = express();
const port = process.env.PORT || 4500;

app.get("/", (req, res) => {
  res.send("Welcome to chat app api! Reference the docs to learn more.");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((key) => key._id === req.params.id);
  res.send(chat);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
