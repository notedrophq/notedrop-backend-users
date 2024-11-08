import { Request, Response } from "express";
import { createUser } from "../services/createuser";

export const createUserController = async (req: Request, res: Response) => {
  const {
    email,
    username,
    avatar,
    description,
    firebaseId,
    favorite_subjects,
  } = req.body;

  try {
    await createUser({
      email,
      username,
      avatar,
      description,
      firebaseId,
      favorite_subjects,
    });
    res.status(201).send("User Created");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};
