import { inject, injectable } from "tsyringe";

import { IExpensesRepository } from "../../repositories/IExpensesRepository";

interface IUpdateExpenseRequest {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

@injectable()
class UpdateExpenseUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expenseRepository: IExpensesRepository
  ) {}

  async execute({
    id,
    description,
    amount,
    date,
  }: IUpdateExpenseRequest): Promise<void> {
    const expense = await this.expenseRepository.getById(id);

    if (!expense) {
      throw new Error("Expense not found!");
    }

    await this.expenseRepository.update({ id, description, amount, date });
  }
}

export { UpdateExpenseUseCase };
