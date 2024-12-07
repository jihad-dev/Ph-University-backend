import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.services";

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is created successfully",
    data: result
  });
});

// get all Academic Semester
const getAllAcademicFacultiesFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultysFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Academic Facultys  is get successfully",
      data: result
    });
  }
);

// get single Academic Semester Data From Database
const getSingleAcademicFacultyFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(
      facultyId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "single Academic Faculty  is get successfully",
      data: result
    });
  }
);

// update Academic Semester
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is updated succesfully",
    data: result
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFaculty
};
