import type {
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export interface song_table {
  id: Generated<string>;
  name: string;
  path: string;
  icon_path: string;
  metadata: JSONColumnType<{
    duration: string;
    artist: string;
    album: string;
    format: string;
    bitrate: number;
    length: string;
  }>;
}

export type songs = Selectable<song_table>;
export type newSong = Insertable<song_table>;
export type updateSong = Updateable<song_table>;
