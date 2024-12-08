import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicDepartmentValidation } from "./AcdemicDepartment.validation";
import { AcademicDepartmentControllers } from "./acdemicDepartment.controller";


const router = express.Router();

// will call controller func //

router.post(
  "/create-academic-department",
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
 AcademicDepartmentControllers.createAcademicDepartmentIntoDB
);

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartmentFromDB);
router.get(
  "/:departmentId",
  AcademicDepartmentControllers.getSingleAcademicDepartmentFromDB
);
router.patch(
  "/:departmentId",
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.updateAcademicDepartmentIntoDB
);
export const AcademicDepartmentRoutes = router;
