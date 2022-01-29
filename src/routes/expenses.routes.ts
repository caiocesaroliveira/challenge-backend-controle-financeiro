import { Request, Response, Router } from "express";

import createExpenseController from "../modules/expenses/useCases/createExpense";

const expensesRoutes = Router();

expensesRoutes.post("/", (request: Request, response: Response) => {
  return createExpenseController().handle(request, response);
});

export { expensesRoutes };
