import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../Student/student.interface";
import { Student } from "../Student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};
  // if password is not given, use default password
  userData.password = password || (config.default_pass as string);

  // student role set
  userData.role = "student";




// find academic semester info
const admissionSemester = await AcademicSemester.findById(
  payload.admissionSemester,
);

const session = await mongoose.startSession()

try {
  session.startTransaction();
  //set  generated id
userData.id = await  generateStudentId(admissionSemester);

// create a user (transtion-1)

const newUser = await User.create([userData],{session}); // Array

// create a student
if (!newUser?.length) {
throw new AppError(httpStatus.BAD_REQUEST, 'Failed To Create User')
}
  // set id , _id as a user
  payload.id = newUser[0].id;
  payload.user = newUser[0]._id;

  // create a Student (transtion-2)
  const newStudent = await Student.create([payload],{session});
  if(!newStudent){
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed To Create Student')
  }
  await session.commitTransaction();
  await session.endSession()
  return newStudent;


} catch (error) {
  await session.abortTransaction();
  await session.endSession();
  throw new Error('Failed to create student');
}




};









export const userServices = {
  createStudentIntoDB
};
