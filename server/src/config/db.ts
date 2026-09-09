import { Kysely, SqliteDialect } from "kysely";
import type { DataBase } from "./schema.ts";
import SQLite from "better-sqlite3";
import { DB } from "./config.ts";

function createDB() {
  
}

const sqlite = new SQLite(DB, {
  verbose: console.log,
});

const dialect = new SqliteDialect({
  database: sqlite,
});

export const db = new Kysely<DataBase>({
  dialect: dialect,
});

// Database is boring
