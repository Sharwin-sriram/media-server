import { db } from "./db.ts";

export async function createTables() {
  await db.schema
    .createTable("library")
    .addColumn("id", "varchar(255)", (cb) => cb.primaryKey().notNull())
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("path", "varchar(255)", (cb) => cb.notNull());
}

export async function nextId(id: String) {
  
}
