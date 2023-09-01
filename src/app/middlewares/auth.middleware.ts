import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import { JwtPayload, Secret } from "jsonwebtoken";
import configs from "@/config";
import ApiError from "@/error/apiError";
import { jwtHelpers } from "@/helpers/jwt.helper";
import { UserRole } from "@/types";

const authorize =
  (...requiredRoles: UserRole[]): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // bearer refresh-token-demo-text
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      let decoded: JwtPayload;

      decoded = jwtHelpers.verifyToken(token, configs.jwt.secret as Secret);

      if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
        throw new ApiError(
          httpStatus.FORBIDDEN,
          "Forbidden",
          "Operation not allowed"
        );
      }

      // check if the user is exist on database
      req.user = {
        id: decoded._id,
        email: decoded.email,
        role: decoded.role,
      };

      next();
    } catch (error) {
      next(error);
    }
  };

export default authorize;
