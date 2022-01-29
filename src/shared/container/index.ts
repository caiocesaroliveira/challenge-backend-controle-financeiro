import { container } from "tsyringe";

import { ExpensesRepository } from "../../modules/expenses/repositories/ExpensesRepository";
import { IExpensesRepository } from "../../modules/expenses/repositories/IExpensesRepository";

container.registerSingleton<IExpensesRepository>(
  "ExpensesRepository",
  ExpensesRepository
);

container.registerSingleton<IExpensesRepository>(ExpensesRepository);
