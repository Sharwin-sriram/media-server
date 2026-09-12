import type {
  Generated,
  Updateable,
  Selectable,
  Insertable,
  JSONColumnType,
} from "kysely";

export interface tv_shows_table {
  id: string;
  name: string;
  path: string;
  icon_path: string;
  metadata: JSONColumnType<{
    duration: string;
    season: string;
    episode: string;
  }>;
}

export type tvShows = Selectable<tv_shows_table>;
export type newTvShow = Insertable<tv_shows_table>;
export type updateTvShow = Updateable<tv_shows_table>;
