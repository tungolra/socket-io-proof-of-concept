import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel
