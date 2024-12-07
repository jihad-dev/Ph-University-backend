import { model, Schema } from "mongoose";
import { TacdemicFaculty } from "./acdemicFaculty.interface";
// Define the Mongoose schema
const academicFacultySchema = new Schema<TacdemicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);



// Create and export the model
export const AcdemicFaculty = model<TacdemicFaculty>("AcdemicFaculty", academicFacultySchema);
