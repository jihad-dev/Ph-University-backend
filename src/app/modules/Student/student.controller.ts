import { RequestHandler } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";



// get single student data
const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "single Student is get successfully",
    data: result
  });
});

// get all student
const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is get successfully",
    data: result
  });
});
// delete student
const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is Delete successfully",
    data: result
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
