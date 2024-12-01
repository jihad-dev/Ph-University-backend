import { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
const createStudent : RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    // data validation using zod
    //   const zodParseData = studentValidationSchema.parse(studentData);

    const result = await userServices.createStudentIntoDB(
      password,
      studentData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student is created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent
};
