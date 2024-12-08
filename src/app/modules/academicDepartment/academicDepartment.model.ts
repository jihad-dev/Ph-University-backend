import { model, Schema, Types } from "mongoose";
import { TacdemicDepartment } from "./academicDepartment.interface";
// Define the Mongoose schema
const academicDepartmentSchema = new Schema<TacdemicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty"
    }
  },
  {
    timestamps: true
  }
);

// Create and export the model
export const AcdemicDepartment = model<TacdemicDepartment>(
  "AcdemicDepartment",
  academicDepartmentSchema
);
