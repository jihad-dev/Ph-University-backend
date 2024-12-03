import express, { NextFunction, Request, Response } from "express";
import { userControllers } from "./user.controller";
import { createStudentValidationSchema } from "../Student/student.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// will call controller func //


router.post(
  "/create-student",
  validateRequest(createStudentValidationSchema),
  userControllers.createStudent
);

export const userRoutes = router;
