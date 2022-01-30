import { Router } from "express";

import { expensesRoutes } from "./expenses.routes";

const router = Router();

router.use("api/expenses", expensesRoutes);

export { router };
