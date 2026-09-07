import type {
  Generated,
  JSONColumnType,
  Selectable,
  Updateable,
  Insertable,
} from "kysely";

export interface library_table {
  id: Generated<String>;
  name: String;
  path: String;
  metadata: JSONColumnType<{
    duration: String;
  }>;
}

export type library = Selectable<library_table>;
export type newLibrary = Insertable<library_table>;
export type updateLibrary = Updateable<library_table>;
