// import mongoose, { Schema, model } from "mongoose";
// import {
//   Guardian,
//   LocalGuardian,
//   Student,
//   UserName
// } from "./student.interface";

// // Define Guardian Schema
// const guardianSchema = new Schema<Guardian>({
//   fatherName: { type: String, required: [true, "Father's name is required"] },
//   fatherOccupation: {
//     type: String,
//     required: [true, "Father's occupation is required"]
//   },
//   fatherContactNo: {
//     type: String,
//     required: [true, "Father's contact number is required"]
//   },
//   motherName: { type: String, required: [true, "Mother's name is required"] },
//   motherOccupation: {
//     type: String,
//     required: [true, "Mother's occupation is required"]
//   },
//   motherContactNo: {
//     type: String,
//     required: [true, "Mother's contact number is required"]
//   }
// });

// const userNameSchema = new Schema<UserName>({
//   firstName: {
//     type: String,
//     trim: true,
//     required: [true, "First name is required"],
//     maxlength: [20, "First name must be 20 characters or fewer"],
//     validate: {
//       validator: function(value: string) {
//         // Ensure the first character is uppercase and the rest are lowercase
//         const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
//         return firstNameStr === value;
//       },
//       message: "{VALUE} is not in capitalized format"
//     }
//   },
//   middleName: { type: String },
//   lastName: {
//     type: String,
//     trim: true,
//     required: [true, "Last name is required"]
//   }
// });

// // Define LocalGuardian Schema
// const localGuardianSchema = new Schema<LocalGuardian>({
//   name: { type: String, required: [true, "Local guardian's name is required"] },
//   occupation: {
//     type: String,
//     required: [true, "Local guardian's occupation is required"]
//   },
//   contactNo: {
//     type: String,
//     required: [true, "Local guardian's contact number is required"]
//   },
//   address: {
//     type: String,
//     required: [true, "Local guardian's address is required"]
//   }
// });

// // Define Student Schema
// const studentSchema = new Schema<Student>({
//   id: {
//     type: String,
//     required: [true, "Student ID is required"],
//     unique: true
//   },
//   name: { type: userNameSchema, required: [true, "Student name is required"] },
//   gender: {
//     type: String,
//     enum: {
//       values: ["male", "female", "other"],
//       message: "{VALUE} is not a valid gender"
//     },
//     required: [true, "Gender is required"]
//   },
//   email: { type: String, required: [true, "Email is required"], unique: true },
//   contactNo: { type: String, required: [true, "Contact number is required"] },
//   emergencyContactNo: {
//     type: String,
//     required: [true, "Emergency contact number is required"]
//   },
//   bloodGroup: {
//     type: String,
//     enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
//     message: "{VALUE} is not a valid blood group"
//   },
//   presentAddress: {
//     type: String,
//     required: [true, "Present address is required"]
//   },
//   permanentAddress: {
//     type: String,
//     required: [true, "Permanent address is required"]
//   },
//   guardian: {
//     type: guardianSchema,
//     required: [true, "Guardian details are required"]
//   },
//   localGuardian: {
//     type: localGuardianSchema,
//     required: [true, "Local guardian details are required"]
//   },
//   profileImg: { type: String },
//   isActive: { type: String, enum: ["active", "blocked"], default: "active" }
// });
import { Schema, model, Document } from "mongoose";
import { Student } from "./student.interface";

// Define the Guardian schema
const GuardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true }
});

// Define the UserName schema
const UserNameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String},
  lastName: { type: String, required: true }
});

// Define the LocalGuardian schema
const LocalGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true }
});

// Define the Student schema
const StudentSchema = new Schema({
  id: { type: String, required: true, unique: true },
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
// Create and export Student model
export const StudentModel = model<Student>("Student", StudentSchema);
