import SQLite from "better-sqlite3";
import { Kysely, SqliteDialect } from "kysely";
import type { DataBase } from "./schema.ts";

const dbPath = process.env.DB;

if (!dbPath) throw new Error("DB variable not set");

const sqlite = new SQLite(dbPath, {
  verbose: console.log,
});

const dialect = new SqliteDialect({
  database: sqlite,
});

export const db = new Kysely<DataBase>({
  dialect: dialect,
});

// Database is boring