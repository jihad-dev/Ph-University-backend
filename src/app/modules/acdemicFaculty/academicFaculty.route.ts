import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicFacultyValidation } from "./AcdemicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";


const router = express.Router();

// will call controller func //

router.post(
  "/create-academic-faculty",
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema
  ),
 AcademicFacultyControllers.createAcademicFaculty
);

router.get("/", AcademicFacultyControllers.getAllAcademicFacultiesFromDB);
router.get(
  "/:facultyId",
  AcademicFacultyControllers.getSingleAcademicFacultyFromDB
);
router.patch(
  "/:facultyId",
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);
export const AcademicFacultyRoutes = router;
