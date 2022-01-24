import cors from "cors";
import express from "express";

import { router } from "./routes";

import "reflect-metadata";
import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };
