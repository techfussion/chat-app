import asycnHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../config/genToken.js";

const registerUser = asycnHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the required field!");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    delete user.password;
    user.token = generateToken(user._id);
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Coudn't create user, try again.");
  }
});

export default registerUser;
