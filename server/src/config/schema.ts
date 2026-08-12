import type { users_table } from "#models/usersTable.ts";
import type { library_table } from "#models/libraryTable.ts";
import type { user_watch_status } from "#models/userWatchStatus.ts";

export interface DataBase {
  users: users_table;
  library: library_table;
  watch_status: user_watch_status;
}
