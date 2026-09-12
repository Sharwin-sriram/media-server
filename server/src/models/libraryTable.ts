import type {
  Generated,
  JSONColumnType,
  Selectable,
  Updateable,
  Insertable,
} from "kysely";

export interface library_table {
  id: string;
  name: string;
  path: string;
  metadata: JSONColumnType<{
    duration: string;
  }>;
}

export type library = Selectable<library_table>;
export type newLibrary = Insertable<library_table>;
export type updateLibrary = Updateable<library_table>;
