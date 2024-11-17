



const createStudent = async (req: Request, res: Response) => {
    try {
      const { student: studentData } = req.body;
      // data validation using zod
      const zodParseData = studentValidationSchema.parse(studentData);
  
      const result = await StudentServices.createStudentIntoDB(zodParseData);
      // send response
      res.status(200).json({
        success: true,
        message: "Student is created successfully",
        data: result
      });
    } catch (error:any) {
      // send response
      res.status(500).json({
        success: false,
        message: error.message || "Something went Wrong",
        error: error
      });
    }
  };