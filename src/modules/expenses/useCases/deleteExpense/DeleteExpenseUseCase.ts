import { inject, injectable } from "tsyringe";

import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
class DeleteExpenseUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expenseRepository: IExpensesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const expense = await this.expenseRepository.getById(id);
    if (!expense) throw new Error("Expense not found.");

    await this.expenseRepository.delete(id);
  }
}

export { DeleteExpenseUseCase };
