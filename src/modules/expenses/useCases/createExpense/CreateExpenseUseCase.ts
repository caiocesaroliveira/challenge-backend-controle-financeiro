import { IExpensesRepository } from "../../repositories/IExpensesRepository";

interface ICreateExpenseRequest {
  description: string;
  amount: number;
  date: Date;
}

class CreateExpenseUseCase {
  constructor(private expenseRepository: IExpensesRepository) {}

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

    this.expenseRepository.create({
      description,
      amount,
      date,
    });
  }
}

export { CreateExpenseUseCase };
