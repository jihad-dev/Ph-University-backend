import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/Student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
import { globalErrorHandler } from "./app/middlewares/globalErrorhandler";
import { notFound } from "./app/middlewares/notFound";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Global Error Handler
app.use(globalErrorHandler);
// NOT FOUND ROUTE
app.use(notFound);

export default app;
