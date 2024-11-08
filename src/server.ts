import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "works!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and Running on port : ${PORT}`);
});
