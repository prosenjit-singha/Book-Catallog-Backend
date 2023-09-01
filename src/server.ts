// Register alias always define it on top of module
import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);

import app from "./app";
import { Server } from "http";
import config from "@/config";

process.on("uncaughtException", (error) => {
  console.log("UncaughtException", error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(`⚡Application listening on port - ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM is received");
  if (server) {
    server.close();
  }
});
