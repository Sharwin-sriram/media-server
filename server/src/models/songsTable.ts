import type {
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export interface song_table {
  id: Generated<String>;
  name: String;
  metadata: JSONColumnType<{
    duration: String;
    artist: String;
    album: String;
    format: String;
    bitrate: number;
    length: String;
  }>;
}

export type songs = Selectable<song_table>;
export type newSong = Insertable<song_table>;
export type updateSong = Updateable<song_table>;
