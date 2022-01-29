import { inject, injectable } from "tsyringe";

import { IExpensesRepository } from "../../repositories/IExpensesRepository";

interface ICreateExpenseRequest {
  description: string;
  amount: number;
  date: Date;
}

@injectable()
class CreateExpenseUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expenseRepository: IExpensesRepository
  ) {}

  async execute({
    description,
    amount,
    date,
  }: ICreateExpenseRequest): Promise<void> {
    const expenseAlreadyExists = await this.expenseRepository.getByDescription(
      description
    );

    if (expenseAlreadyExists) {
      throw new Error("Expense already exists!");
    }

    await this.expenseRepository.create({
      description,
      amount,
      date,
    });
  }
}

export { CreateExpenseUseCase };
