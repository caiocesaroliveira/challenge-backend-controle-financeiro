import { inject, injectable } from "tsyringe";

import { Expense } from "../../entities/Expense";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
class DetailExpenseUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expenseRepository: IExpensesRepository
  ) {}

  async execute(id: string): Promise<Expense> {
    const expense = await this.expenseRepository.getById(id);
    return expense;
  }
}

export { DetailExpenseUseCase };
