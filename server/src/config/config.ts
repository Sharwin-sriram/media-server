import os from "os";
import path from "path";

export const DB = path.join(os.homedir(), "/media.db");
export const PORT: number = 3000;