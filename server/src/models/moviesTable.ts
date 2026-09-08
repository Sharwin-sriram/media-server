import type {
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export interface movie_table {
  id: Generated<String>;
  name: String;
  path: String;
  icon_path: String;
  metadata: JSONColumnType<{
    duration: String;
    release_year: String;
  }>;
}

export type movies = Selectable<movie_table>;
export type newMovie = Insertable<movie_table>;
export type updateMovie = Updateable<movie_table>;
