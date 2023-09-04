import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

const handleClientKnownRequestError = (err: PrismaClientKnownRequestError) => {
  let message = err.message;

  let error: Record<string, string> | string = {};

  if (err.code === "P2002") {
    message = `Duplicate value exists for '${err.meta?.target}'`;
    const path = (err.meta?.target as string) || "duplicateError";
    error = { [path]: message };
  } else if (err.code === "P2025") {
    // An operation failed because it depends on one or more records that were required but not found. {cause}
    message = (err.meta?.cause as string) || "Record not found";
    error =
      "An operation failed because it depends on one or more records that were required but not found.";
  }
  return { error, message };
};

const handleValidationError = (err: PrismaClientValidationError) => {
  return { prismaValidationError: err.message };
};

export default { handleClientKnownRequestError, handleValidationError };
