import { Request, Response } from "express";
import { StudentServices } from "./student.service";


const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: "Student is get successfully",
      data: result
    });
  } catch (error:any) {
    // send response
    res.status(500).json({
      success: false,
      message: error.message || "Something went Wrong",
      error: error
    });
  }
};
// get single student data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: "single Student is get successfully",
      data: result
    });
  } catch (error:any) {
    // send response
    res.status(500).json({
      success: false,
      message: error.message || "Something went Wrong",
      error: error
    });
  }
};

// delete student
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    // send response
    res.status(200).json({
      success: true,
      message: "Student is Delete successfully",
      data: result
    });
  } catch (error:any) {
    // send response
    res.status(500).json({
      success: false,
      message: error.message || "Something went Wrong",
      error: error
    });
  }
};

export const StudentControllers = {
  
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
