import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { createUserController } from "./controllers/usercontroller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post(
  "/api/v1/createuser",
  createUserController,
  express.json({ limit: "7mb" })
);

app.listen(PORT, () => {
  console.log(`🚀 Server is up and Running on port : ${PORT}`);
});
