import { ExpensesRepository } from "../../repositories/ExpensesRepository";
import { CreateExpenseController } from "./CreateExpenseController";
import { CreateExpenseUseCase } from "./CreateExpenseUseCase";

export default (): CreateExpenseController => {
  const expensesRepository = new ExpensesRepository();

  const createExpenseUseCase = new CreateExpenseUseCase(expensesRepository);

  const createExpenseController = new CreateExpenseController(
    createExpenseUseCase
  );

  return createExpenseController;
};
