import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects } from "zod";

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const parsedData = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });

      if (parsedData.body) req.body = parsedData.body;
      if (parsedData.query) req.query = parsedData.query;
      if (parsedData.params) req.params = parsedData.params;
      if (parsedData.cookies) req.cookies = parsedData.cookies;

      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
