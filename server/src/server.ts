import express from "express";
import { IPV4 } from "#config/network.ts";

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started in port ${PORT}`);
  console.log(`localhost: http://localhost:${PORT}`);
  console.log(`Network: ${IPV4}`);
});
