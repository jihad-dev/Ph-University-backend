import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName
} from "./student.interface";
import config from "../../config";

// Define the Guardian schema
const GuardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true }
});

// Define the UserName schema
const UserNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true }
});

// Define the LocalGuardian schema
const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true }
});

// Define the Student schema
const StudentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    maxlength: [20, "password must be 20 charector"]
  },
  name: { type: UserNameSchema, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: GuardianSchema, required: true },
  localGuardian: { type: LocalGuardianSchema, required: true },
  profileImg: { type: String },
  isActive: { type: String, enum: ["active", "blocked"], required: true }
});

StudentSchema.pre("save", async function(next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// creating a custom static method
StudentSchema.statics.isUserExists = async function(id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// StudentSchema.methods.isUserExits = async function(id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// Create and export Student model
export const Student = model<TStudent, StudentModel>("Student", StudentSchema);
