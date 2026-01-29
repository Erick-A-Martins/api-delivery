import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError.js"

export function errorHandling(
    error: any,
    request: Request, 
    response: Response,
    next: NextFunction    
){
    if(error instanceof AppError){
        return response.status(error.statusCode).json({ messsage: error.message });
    }

    return response.status(500).json({ message: error.message });
}