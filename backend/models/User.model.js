import mongoose from "mongoose";

/**
 * User schema — stores account data (auth comes in Phase 4).
 * password will be hashed with bcrypt before save (later).
 */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false, // never return password in queries unless we ask explicitly
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxlength: 160,
      default: "",
    },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

// username and email already have unique: true (MongoDB creates indexes)

export const User = mongoose.model("User", userSchema);
