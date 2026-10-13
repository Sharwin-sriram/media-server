import type {
  Generated,
  Updateable,
  Selectable,
  Insertable,
  JSONColumnType,
} from "kysely";

export interface user_table {
  id: number;
  name: string;
  password: string;
}

export type users = Selectable<user_table>;
export type newUser = Insertable<user_table>;
export type updateUser = Updateable<user_table>;
