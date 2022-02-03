import { Router } from "express";

import { CreateExpenseController } from "../modules/expenses/useCases/createExpense/CreateExpenseController";
import { DeleteExpenseController } from "../modules/expenses/useCases/deleteExpense/DeleteExpenseController";
import { DetailExpenseController } from "../modules/expenses/useCases/detailExpense/DetailExpenseController";
import { ListExpenseController } from "../modules/expenses/useCases/listExpense/ListExpenseController";
import { ListExpensesByMonthController } from "../modules/expenses/useCases/listExpensesByMonth/ListExpensesByMonthController";
import { UpdateExpenseController } from "../modules/expenses/useCases/updateExpense/UpdateExpenseController";

const expensesRoutes = Router();

const listExpenseController = new ListExpenseController();
const listExpenseByMonthController = new ListExpensesByMonthController();
const detailExpenseController = new DetailExpenseController();
const createExpenseController = new CreateExpenseController();
const updateExpenseController = new UpdateExpenseController();
const deleteExpenseController = new DeleteExpenseController();

expensesRoutes.get("/", listExpenseController.handle);
expensesRoutes.get("/:id", detailExpenseController.handle);
expensesRoutes.get("/:year/:month", listExpenseByMonthController.handle);
expensesRoutes.post("/", createExpenseController.handle);
expensesRoutes.put("/:id", updateExpenseController.handle);
expensesRoutes.delete("/:id", deleteExpenseController.handle);

export { expensesRoutes };
