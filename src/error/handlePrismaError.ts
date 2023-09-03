import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

const handleClientKnownRequestError = (err: PrismaClientKnownRequestError) => {
  let message = "";
  // console.log(err.code)
  if (err.code === "P2002") {
    message = `Duplicate value exists for '${err.meta?.target}'`;
    const path = (err.meta?.target as string) || "duplicateError";
    return { [path]: message };
  }
  if (err.code === "P2025") {
    message = (err.meta?.cause as string) || "Record not found";
  }
  return { ["errorMsg"]: message };
};

const handleValidationError = (err: PrismaClientValidationError) => {
  return { prismaValidationError: err.message };
};

export default { handleClientKnownRequestError, handleValidationError };
