import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

// registering a new user
export async function registerUser(req, res) {
  const { username, password, firstname, lastname } = req.body;

  const SALT_ROUNDS = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
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
      validity
        ? res.status(200).json(user)
        : res.status(400).json("Wrong Password");
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
