import bcrypt from "bcrypt";
import config from "@/config";

const hashData = async (data: string) =>
  await bcrypt.hash(data, config.bcrypt_salt_round as number);
