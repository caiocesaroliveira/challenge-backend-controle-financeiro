import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { transactionsRoutes } from "./transactions.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/transactions", transactionsRoutes);

export { router };
