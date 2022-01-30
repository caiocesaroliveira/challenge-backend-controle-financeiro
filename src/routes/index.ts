import { Router } from "express";

import { expensesRoutes } from "./expenses.routes";
import { incomesRoutes } from "./incomes.routes";

const router = Router();

router.use("/api/expenses", expensesRoutes);
router.use("/api/incomes", incomesRoutes);

export { router };
