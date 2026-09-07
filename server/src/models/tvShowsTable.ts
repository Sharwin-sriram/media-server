import type {
  Generated,
  Updateable,
  Selectable,
  Insertable,
  JSONColumnType,
} from "kysely";

export interface tv_shows_table {
  id: Generated<String>;
  name: String;
  metadata: JSONColumnType<{
    duration: String;
    season: String;
    episode: String;
  }>;
}

export type tvShows = Selectable<tv_shows_table>;
export type newTvShow = Insertable<tv_shows_table>;
export type updateTvShow = Updateable<tv_shows_table>;
