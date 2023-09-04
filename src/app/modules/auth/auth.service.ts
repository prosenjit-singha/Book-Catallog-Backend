import config from "../../../config";
import ApiError from "../../../error/apiError";
import { jwtHelpers } from "../../../helpers";
import { prisma } from "../../../helpers/prisma.helper";
import type { AuthCredential } from "../../../types/credential.type";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import httpStatus from "http-status";

const signIn = async (credential: AuthCredential) => {
  const user = await prisma.user.findUnique({
    where: { email: credential.email },
  });

  if (!user) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Failed to login",
      "No account found for this email address"
    );
  }

  const isVerified = await bcrypt.compare(credential.password, user.password);

  if (!isVerified) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Failed to login",
      "Invalid credentials"
    );
  }

  const { password: pass, ...data } = user;

  const jwtPayload = {
    role: user.role,
    userId: user.id,
    email: user.email,
  };

  // create secret token
  const accessToken = jwtHelpers.createToken(
    jwtPayload,
    config.jwt.secret,
    config.jwt.expire_in
  );

  return { data, accessToken };
};

const signUp = async (context: User) => {
  context.password = await bcrypt.hash(
    context.password,
    config.bcrypt_salt_round
  );

  const user = await prisma.user.create({
    data: context,
  });

  const { password: pass, ...data } = user;

  const jwtPayload = {
    role: user.role,
    userId: user.id,
    email: user.email,
  };

  // create secret token
  const accessToken = jwtHelpers.createToken(
    jwtPayload,
    config.jwt.secret,
    config.jwt.expire_in
  );

  return { data, accessToken };
};

export default { signIn, signUp };
