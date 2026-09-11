import "dotenv/config";
import express from "express";
import { IPV4 } from "#config/network.ts";
import { PORT } from "#config/config.ts";
import { db } from "#config/db.ts";

const app = express();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started`);
  console.log(`localhost: http://localhost:${PORT}`);
  if (!IPV4) console.log(`Network: Not Connected`);
  else console.log(`Network: http://${IPV4}:${PORT}`);
});
