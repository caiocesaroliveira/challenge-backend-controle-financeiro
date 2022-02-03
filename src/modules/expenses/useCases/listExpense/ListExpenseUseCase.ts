import { inject, injectable } from "tsyringe";

import { Expense } from "../../entities/Expense";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
class ListExpenseUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expenseRepository: IExpensesRepository
  ) {}

  async execute(description): Promise<Expense[]> {
    let expenses: Expense[];

    if (description) {
      expenses = await this.expenseRepository.getAllByDescription(description);
    } else {
      expenses = await this.expenseRepository.getAll();
    }

    return expenses;
  }
}

export { ListExpenseUseCase };
