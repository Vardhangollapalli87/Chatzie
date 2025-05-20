import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPA0V7isYUzbHVkk7eIhqhkHUvGNF2uEwXg&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
