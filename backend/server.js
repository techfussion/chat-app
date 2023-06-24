import express from "express";
import env from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/userRouter.js";
import { badUrl, errorHandler } from "./middleware/errorMiddleware.js";

env.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 4500;

app.get("/", (req, res) => {
  res.send("Welcome to chat app api! Reference the docs to learn more.");
});

app.use("/api/user", router);
app.use(badUrl);
app.use(errorHandler);

try {
  await connectDB();
  app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
  });
} catch (err) {
  console.log(`Error: ${err.message}`);
}
