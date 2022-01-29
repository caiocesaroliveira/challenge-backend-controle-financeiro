import { Router } from "express";

import { expensesRoutes } from "./expenses.routes";

const router = Router();

router.use("/expenses", expensesRoutes);

export { router };
