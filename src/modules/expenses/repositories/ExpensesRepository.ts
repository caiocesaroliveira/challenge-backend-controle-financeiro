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
  async getAllByDescription(description: string): Promise<Expense[]> {
    const expenses = await this.repository.find({
      where: {
        description: Like(`%${description}%`),
      },
    });
    return expenses;
  }
  async getAllByMonth(year: number, month: string): Promise<Expense[]> {
    const expense = await this.repository
      .createQueryBuilder("expense")
      .where(`strftime('%Y', expense.date) = '${year}'`)
      .andWhere(`strftime('%m', expense.date) = '${month}'`)
      .getMany();

    return expense;
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
    category,
  }: ICreateExpenseDTO): Promise<void> {
    const expense = this.repository.create({
      description,
      amount,
      date,
      category,
    });

    await this.repository.save(expense);
  }
  async update({
    id,
    description,
    amount,
    date,
    category,
  }: IUpdateExpenseDTO): Promise<void> {
    const expense = await this.repository.findOne(id);

    await this.repository.save({
      ...expense,
      description,
      amount,
      date,
      category,
    });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { ExpensesRepository };
