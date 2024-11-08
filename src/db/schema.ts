import {
  mysqlTable,
  serial,
  varchar,
  int,
  text,
  json,
} from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users_table", {
  id: serial().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  username: varchar({ length: 45 }).notNull().unique(),
  avatar: text().notNull(),
  description: varchar({ length: 800 }).notNull().default(""),
  follows: int().notNull().default(0),
  likes: int().notNull().default(0),
  firebaseId: varchar({ length: 65 }).notNull().unique(),
  favorite_subjects: json().notNull(),
});
