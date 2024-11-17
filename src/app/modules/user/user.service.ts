import { User } from "./user.model";

const createStudentIntoDB = async (studentData: TStudent) => {
    // if (await Student.isUserExists(studentData.id)) {
    //   throw new Error("user Already Exists");
    // }



    const result = await User.create(studentData);
  
    // const student = new Student(studentData);
    // if(await student.isUserExits(studentData.id)){
    //   throw new Error("user Already exits");
  
    // }
    // const result = await student.save()
  
    return result;
  };


  export const userService ={
    createStudentIntoDB
  }
  