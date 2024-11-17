import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

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
      default:'in-progress',
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


// Create and export the model
export const User = model<TUser>("User", UserSchema);

