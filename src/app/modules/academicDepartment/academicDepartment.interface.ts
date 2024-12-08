import { Types } from "mongoose";

export type TacdemicDepartment = {
  name: string;
  academicFaculty: Types.ObjectId;
};
