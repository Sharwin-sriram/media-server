import type { Kysely } from "kysely";
import { db } from "./db.ts";

export async function createTables() {
  await db.schema
    .createTable("library")
    .addColumn("id", "text", (cb) => cb.primaryKey().notNull())
    .addColumn("name", "text", (cb) => cb.notNull())
    .addColumn("path", "text", (cb) => cb.notNull())
    .addColumn("metadata", "text", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("movies")
    .addColumn("id", "text", (cb) => cb.notNull())
    .addColumn("name", "text", (cb) => cb.notNull())
    .addColumn("path", "text", (cb) => cb.notNull())
    .addColumn("icon_path", "text", (cb) => cb.notNull())
    .addColumn("metadata", "text", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("songs")
    .addColumn("id", "text", (cb) => cb.notNull())
    .addColumn("name", "text", (cb) => cb.notNull())
    .addColumn("path", "text", (cb) => cb.notNull())
    .addColumn("icon_path", "text", (cb) => cb.notNull())
    .addColumn("metadata", "text", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("tvShows")
    .addColumn("id", "text", (cb) => cb.notNull())
    .addColumn("name", "text", (cb) => cb.notNull())
    .addColumn("path", "text", (cb) => cb.notNull())
    .addColumn("icon_path", "text", (cb) => cb.notNull())
    .addColumn("metadata", "text", (cb) => cb.notNull())
    .execute();
}
// TODO: Implement fully
export async function nextId() {
  
}
