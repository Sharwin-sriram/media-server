import { db } from "#config/db.ts";

db.introspection.getTables().then((tables) => {
  console.log(tables);
});
