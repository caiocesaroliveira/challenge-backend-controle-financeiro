import { container } from "tsyringe";

import { ExpensesRepository } from "../../modules/expenses/repositories/ExpensesRepository";
import { IExpensesRepository } from "../../modules/expenses/repositories/IExpensesRepository";
import { IIncomesRepository } from "../../modules/incomes/repositories/IIncomesRepository";
import { IncomesRepository } from "../../modules/incomes/repositories/IncomesRepository";

container.registerSingleton<IExpensesRepository>(
  "ExpensesRepository",
  ExpensesRepository
);

container.registerSingleton<IIncomesRepository>(
  "IncomesRepository",
  IncomesRepository
);
