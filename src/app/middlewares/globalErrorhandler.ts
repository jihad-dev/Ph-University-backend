// Global Error Handler

import { NextFunction,Request,Response } from "express";

 export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500; // Default to 500 if status not provided
    const message = err.message || 'Something went wrong';
  
    res.status(statusCode).json({
      success: false,
      message,
      error: err
    });
  }