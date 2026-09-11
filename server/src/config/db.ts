import { Kysely, ParseJSONResultsPlugin, SqliteDialect } from "kysely";
import type { DataBase } from "./schema.ts";
import SQLite from "better-sqlite3";
import { DB } from "./config.ts";
import fs from "fs";

function createDB() {
  if (!fs.existsSync(DB)) {
    fs.writeFile(DB, "", (err) => {
      if (err) console.log(err);
    });
  }
}
createDB();

const sqlite = new SQLite(DB, {
  verbose: console.log,
});

const dialect = new SqliteDialect({
  database: sqlite,
});

export const db = new Kysely<DataBase>({
  dialect: dialect,
  plugins: [new ParseJSONResultsPlugin()],
});

// Database is irritating
