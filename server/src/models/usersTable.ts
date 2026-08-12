import type { Generated, Selectable, Insertable, Updateable } from "kysely";

export interface users_table {
  id: Generated<number>;
  name: String;
}

export type User = Selectable<users_table>;
export type updateUser = Updateable<users_table>;
export type newUser = Insertable<users_table>;
