import { Router } from "express";

import CategoryController from "../controllers/CategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", CategoryController.create);
categoriesRoutes.get("/", CategoryController.getAll);
categoriesRoutes.get("/:id", CategoryController.getById);

export { categoriesRoutes };
