import config from "../../config";
import { TStudent } from "../Student/student.interface";
import { Student } from "../Student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};
  // if password is not given, use default password
  userData.password = password || (config.default_pass as string);

  // student role set
  userData.role = "student";

  // set manually generated id
  userData.id = "2030100405";

  // create a user

  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id , _id as a user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB
};
