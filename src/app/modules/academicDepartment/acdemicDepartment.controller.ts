import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.services";

const createAcademicDepartmentIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department is created successfully",
    data: result
  });
});

// get all Academic Semester
const getAllAcademicDepartmentFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Academic Department  is get successfully",
      data: result
    });
  }
);

// get single Academic Semester Data From Database
const getSingleAcademicDepartmentFromDB: RequestHandler = catchAsync(
  async (req, res) => {
    const { departmentId } = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "single Academic Department   is get successfully",
      data: result
    });
  }
);

// update Academic Semester
const updateAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
    departmentId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department is updated succesfully",
    data: result
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB
};
