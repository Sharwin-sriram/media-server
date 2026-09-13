import { db } from "#config/db.ts";
import type { movies, updateMovie, newMovie } from "#models/moviesTable.ts";

export async function getMovieById(id: string) {
  return await db
    .selectFrom("movies")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function createMovie(movie: newMovie) {
  return await db
    .insertInto("movies")
    .values(movie)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function moiveUpdate(id: string, updateWith: updateMovie) {
  await db.updateTable("movies").set(updateWith).where("id", "=", id);
}

export async function deleteMoive(id: string) {
  return await db
    .deleteFrom("movies")
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirst();
}
