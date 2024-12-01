import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'
// Define the Mongoose schema
const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    needsPasswordChange: {
      type: Boolean,
      default: true
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
      required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// hasing password
UserSchema.pre("save", async function(next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// when password save return " " password
UserSchema.post("save", function(doc, next) {
  doc.password = "";
  next();
});

// Create and export the model
export const User = model<TUser>("User", UserSchema);
