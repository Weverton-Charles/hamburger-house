import express, { type Request, type Response } from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routers.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);

connection();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
