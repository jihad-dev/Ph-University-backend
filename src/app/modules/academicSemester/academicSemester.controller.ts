import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result
  });
});

// get all Academic Semester
const getAllAcademicSemestersFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All AcademicSemesters  is get successfully",
      data: result
    });
  }
);

// get single Academic Semester Data From Database
const getSingleAcademicSemesterFromDB: RequestHandler = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "single Semester is get successfully",
    data: result
  });
});




// update Academic Semester 
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});


export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemester
};
