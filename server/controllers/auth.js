import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// registering a new user
export async function registerUser(req, res) {
  const SALT_ROUNDS = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { username } = req.body;
  try {
    // check if user already exists
    const oldUser = await UserModel.findOne({ username });
    if (oldUser) {
      return res
        .status(400)
        .json({ message: "Username is already registered" });
    }
    const user = await newUser.save();
    const token = jwt.sign(
      {
        //inside token, using the new user for the signature
        username: user.username,
        id: user._id,
      },
      process.env.JWT_KEY,
      { expiresIn: "1hr" }
    );
    //send response as the new user and the token to store in local storage & redux store
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Wrong password");
      } else {
        const token = jwt.sign(
          {
            username: user.username,
            id: user._id,
          },
          process.env.JWT_KEY,

          { expiresIn: "1hr" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
