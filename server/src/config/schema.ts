import type { library_table } from "#models/libraryTable.ts";
import type { user_watch_status } from "#models/userWatchStatus.ts";
import type { movie_table } from "#models/moviesTable.ts";
import type { song_table } from "#models/songsTable.ts";
// import type {}

export interface DataBase {
  library: library_table;
  watch_status: user_watch_status;
  movies: movie_table;
  songs: song_table;
}
