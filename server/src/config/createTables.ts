import type { Kysely } from "kysely";
import { db } from "./db.ts";
import type { DataBase } from "./schema.ts";
import type { library_table } from "#models/libraryTable.ts";
import type { movie_table } from "#models/moviesTable.ts";
import type { song_table } from "#models/songsTable.ts";
import type { tv_shows_table } from "#models/tvShowsTable.ts";

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
export async function nextId(
  table: "library_table" | "movie_table" | "song_table" | "tv_shows_table",
  prefix: "L" | "M" | "S" | "TV",
): Promise<String> {
  const lastRow = await db
    .selectFrom(table)
    .select("id")
    .where("id", "like", `${prefix}%`)
    .orderBy("id", "desc")
    .limit(1)
    .executeTakeFirst();
  let num = 1;
  let numpart;
  return `${prefix}${numPart}`;
}
