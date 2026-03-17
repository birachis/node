import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {

    const request = req;
    console.log("Request Method", request.method);
    console.log("Request URL", request.url);


    next();
};
