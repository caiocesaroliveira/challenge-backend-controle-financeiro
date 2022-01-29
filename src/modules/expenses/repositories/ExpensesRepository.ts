import { getRepository, Like, Repository } from "typeorm";

import { Expense } from "../entities/Expense";
import {
  ICreateExpenseDTO,
  IExpensesRepository,
  IUpdateExpenseDTO,
} from "./IExpensesRepository";

class ExpensesRepository implements IExpensesRepository {
  private repository: Repository<Expense>;

  constructor() {
    this.repository = getRepository(Expense);
  }
  async getAll(): Promise<Expense[]> {
    const expenses = await this.repository.find();
    return expenses;
  }
  async getById(id: string): Promise<Expense> {
    const expense = await this.repository.findOne({ id });
    return expense;
  }
  async getByDescription(description: string): Promise<Expense> {
    const expense = await this.repository.findOne({
      description,
    });

    return expense;
  }
  async create({
    description,
    amount,
    date,
  }: ICreateExpenseDTO): Promise<void> {
    const expense = this.repository.create({
      description,
      amount,
      date,
    });

    await this.repository.save(expense);
  }
  async update({
    id,
    description,
    amount,
    date,
  }: IUpdateExpenseDTO): Promise<void> {
    const expense = await this.repository.findOne(id);

    await this.repository.save({ ...expense, description, amount, date });
  }
  async delete(id: string): Promise<void> {
    const expense = await this.repository.findOne(id);

    await this.repository.delete(expense);
  }
}

export { ExpensesRepository };
