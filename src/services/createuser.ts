import { usersTable } from "../db/schema";
import dotenv from "dotenv";
import path from "path";
import { drizzle } from "drizzle-orm/mysql2";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface createUserEntry {
  email: string;
  username: string;
  avatar: string;
  description: string;
  firebaseId: string;
  favorite_subjects: string[];
}

const db = drizzle(process.env.DATABASE_URL!);

export const createUser = async ({
  email,
  username,
  avatar,
  description,
  firebaseId,
  favorite_subjects,
}: createUserEntry) => {
  try {
    const user = await db.insert(usersTable).values({
      email,
      username,
      avatar,
      description,
      firebaseId,
      favorite_subjects,
    });
    console.log("New User Inserted");
  } catch (error) {
    console.log(error);
    throw new Error("Error Inserting User");
  }
};
