import { Schema, Types, model } from "mongoose";
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName
} from "./student.interface";

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
const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "userId is required"],
      unique: true,
      ref: "User"
    },

    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date },
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
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester"
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcdemicDepartment"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// virtual
StudentSchema.virtual("fullName").get(function() {
  return `${this
    .name.firstName} ${this.name.middleName} ${this.name.lastName} `;
});

// Qutry Middleware

StudentSchema.pre("find", function(next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre("findOne", function(next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre("aggregate", function(next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a custom static method
StudentSchema.statics.isUserExists = async function(id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Create and export Student model
export const Student = model<TStudent, StudentModel>("Student", StudentSchema);
