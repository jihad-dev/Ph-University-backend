import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/Student/student.route";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express();


// parser
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', userRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
