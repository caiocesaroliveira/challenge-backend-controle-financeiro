import { Router } from "express";

import TransactionController from "../controllers/TransactionController";

const transactionsRoutes = Router();

transactionsRoutes.post("/incomes", TransactionController.create);
transactionsRoutes.get("/incomes", TransactionController.getAll);
transactionsRoutes.get("/incomes/:id", TransactionController.getById);

transactionsRoutes.post("/expenses", TransactionController.create);
transactionsRoutes.get("/expenses", TransactionController.getAll);
transactionsRoutes.get("/expenses/:id", TransactionController.getById);

export { transactionsRoutes };
