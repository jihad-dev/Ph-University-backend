import { model, Schema } from "mongoose";
import { TacdemicDepartment } from "./academicDepartment.interface";
import AppError from "../../errors/AppError";
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
      ref: "AcdemicFaculty"
    }
  },
  {
    timestamps: true
  }
);



academicDepartmentSchema.pre('save', async function(next){
  const isDepartmentExists = await AcdemicDepartment.findOne({name:this?.name});
  if(isDepartmentExists){
    throw new AppError(404,"Department Already Exists!!");
    
  }
  next()
})


academicDepartmentSchema.pre('findOneAndUpdate', async function(next){
  const query = this?.getQuery();
  const isDepartmentExists = await AcdemicDepartment.findOne(query);
  if(!isDepartmentExists){
    throw new AppError(404,"Department does not Exists!!");
    
  }
  next()
})




// Create and export the model
export const AcdemicDepartment = model<TacdemicDepartment>(
  "AcdemicDepartment",
  academicDepartmentSchema
);
