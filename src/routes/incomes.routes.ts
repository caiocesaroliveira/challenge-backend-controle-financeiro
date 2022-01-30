import { Router } from "express";

import { CreateIncomeController } from "../modules/incomes/useCases/createIncome/CreateIncomeController";
import { DeleteIncomeController } from "../modules/incomes/useCases/deleteIncome/DeleteIncomeController";
import { DetailIncomeController } from "../modules/incomes/useCases/detailIncome/DetailIncomeController";
import { ListIncomeController } from "../modules/incomes/useCases/listIncome/ListIncomeController";
import { UpdateIncomeController } from "../modules/incomes/useCases/updateIncome/UpdateIncomeController";

const incomesRoutes = Router();

const listIncomeController = new ListIncomeController();
const detailIncomeController = new DetailIncomeController();
const createIncomeController = new CreateIncomeController();
const updateIncomeController = new UpdateIncomeController();
const deleteIncomeController = new DeleteIncomeController();

incomesRoutes.get("/", listIncomeController.handle);
incomesRoutes.get("/:id", detailIncomeController.handle);
incomesRoutes.post("/", createIncomeController.handle);
incomesRoutes.put("/:id", updateIncomeController.handle);
incomesRoutes.delete("/:id", deleteIncomeController.handle);

export { incomesRoutes };
