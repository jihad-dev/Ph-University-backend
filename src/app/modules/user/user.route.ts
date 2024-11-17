import express from "express";

const router = express.Router();

// will call controller func //

router.post("/create-student", userControllers.createStudent);

export const userRoutes = router;
