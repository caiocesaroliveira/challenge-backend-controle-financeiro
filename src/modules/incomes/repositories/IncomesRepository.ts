import { getRepository, Like, Repository } from "typeorm";

import { Income } from "../entities/Income";
import {
  ICreateIncomeDTO,
  IIncomesRepository,
  IUpdateIncomeDTO,
} from "./IIncomesRepository";

class IncomesRepository implements IIncomesRepository {
  private repository: Repository<Income>;

  constructor() {
    this.repository = getRepository(Income);
  }
  async getAll(): Promise<Income[]> {
    const incomes = await this.repository.find();
    return incomes;
  }
  async getAllByDescription(description: string): Promise<Income[]> {
    const expenses = await this.repository.find({
      where: {
        description: Like(`%${description}%`),
      },
    });
    return expenses;
  }
  async getById(id: string): Promise<Income> {
    const expense = await this.repository.findOne({ id });
    return expense;
  }
  async getByDescription(description: string): Promise<Income> {
    const expense = await this.repository.findOne({
      description,
    });

    return expense;
  }
  async create({ description, amount, date }: ICreateIncomeDTO): Promise<void> {
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
  }: IUpdateIncomeDTO): Promise<void> {
    const expense = await this.repository.findOne(id);

    await this.repository.save({ ...expense, description, amount, date });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { IncomesRepository };
