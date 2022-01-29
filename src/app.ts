import cors from "cors";
import express from "express";

import "express-async-errors";
import "reflect-metadata";
import "./database";

import { errorMiddleware } from "./middlewares/errorMiddleware";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

export { app };
