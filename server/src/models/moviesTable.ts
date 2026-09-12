import type {
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export interface movie_table {
  id: string;
  name: string;
  path: string;
  icon_path: string;
  metadata: JSONColumnType<{
    duration: string;
    release_year: string;
  }>;
}

export type movies = Selectable<movie_table>;
export type newMovie = Insertable<movie_table>;
export type updateMovie = Updateable<movie_table>;
