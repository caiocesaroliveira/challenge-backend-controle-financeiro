import { inject, injectable } from "tsyringe";

import { IExpensesRepository } from "../../repositories/IExpensesRepository";

interface ICreateExpenseRequest {
  description: string;
  amount: number;
  date: Date;
  category?: string;
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
    category,
  }: ICreateExpenseRequest): Promise<void> {
    if (!description)
      throw new Error("Invalid description. Description is required");
    if (!amount) throw new Error("Invalid amount. Amount is required");
    if (!description) throw new Error("Invalid date. Date is required");

    const expenseAlreadyExists = await this.expenseRepository.getByDescription(
      description
    );

    if (expenseAlreadyExists) throw new Error("Expense already exists.");

    await this.expenseRepository.create({
      description,
      amount,
      date,
      category: category?.trim() ? category : "Outras",
    });
  }
}

export { CreateExpenseUseCase };
