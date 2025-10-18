import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  handle: { type: String, required: true, unique: true },
  avatar: { type: String, default: "" },
  bio: { type: String, default: "" },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);
export default User;
