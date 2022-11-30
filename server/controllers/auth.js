import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// registering a new user
export async function registerUser(req, res) {
  // const { username, password, firstname, lastname } = req.body;

  const SALT_ROUNDS = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  // implementing hashpassword to equal to req.body.password
  req.body.password = hashedPass;
  //fetch username from req.body
  const newUser = new UserModel(
    // don't need to instantiate new user by creating object, can just use req.body
    // after setting password to hashpass (line 11)
    //   {
    //   username,
    //   password: hashedPass,
    //   firstname,
    //   lastname,
    // }
    req.body
  );
  const { username } = req.body;
  try {
    // check if user already exists
    const oldUser = await UserModel.findOne({ username });
    if (oldUser) {
      return res
        .status(400)
        .json({ message: "Username is already registered" });
    }
    //if userdoes not exist, save new user
    const user = await newUser.save();

    const token = jwt.sign(
      {
        //inside token, using the new user for the signature
        username: user.username,
        id: user._id,
      },
      //secret key req'd for 2nd parameter
      process.env.JWT_KEY,
      //set timelimit for token: the same user cannot use the same session after 1hr
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
      // validity
      //   ? res.status(200).json(user)
      //   : res.status(400).json("Wrong Password");
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
        res.status(200).json({user, token});
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
