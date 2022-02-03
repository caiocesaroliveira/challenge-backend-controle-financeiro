import { inject, injectable } from "tsyringe";

import { Expense } from "../../entities/Expense";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
class ListExpensesByMonthUseCase {
  constructor(
    @inject("ExpensesRepository")
    private incomeRepository: IExpensesRepository
  ) {}

  async execute(year: number, month: string): Promise<Expense[]> {
    const expenses = await this.incomeRepository.getAllByMonth(year, month);

    return expenses;
  }
}

export { ListExpensesByMonthUseCase };
