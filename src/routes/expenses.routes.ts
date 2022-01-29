import { Router } from "express";

import { CreateExpenseController } from "../modules/expenses/useCases/createExpense/CreateExpenseController";
import { DetailExpenseController } from "../modules/expenses/useCases/detailExpense/DetailExpenseController";
import { ListExpenseController } from "../modules/expenses/useCases/listExpense/ListExpenseController";
import { UpdateExpenseController } from "../modules/expenses/useCases/updateExpense/UpdateExpenseController";

const expensesRoutes = Router();

const createExpenseController = new CreateExpenseController();
const detailExpenseController = new DetailExpenseController();
const listExpenseController = new ListExpenseController();
const updateExpenseController = new UpdateExpenseController();

expensesRoutes.get("/", listExpenseController.handle);
expensesRoutes.get("/:id", detailExpenseController.handle);
expensesRoutes.post("/", createExpenseController.handle);
expensesRoutes.put("/:id", updateExpenseController.handle);

export { expensesRoutes };
