import { Request, Response } from "express";

import { Expense } from "../entities/Expense";
import { ExpenseRepository } from "../repositories/ExpenseRepository";
import { IExpensesRepository } from "../repositories/interfaces/IExpenseRepository";

class ExpenseController {
  private repo: IExpensesRepository;

  constructor() {
    this.repo = new ExpenseRepository();
  }

  async getAll(request: Request, response: Response) {
    const { description } = request.query;
    let expenses: Expense[] = null;

    if (description) {
      expenses = await this.repo.getAll();
    } else {
      expenses = await this.repo.getByDescription(String(description));
    }

    return response.status(200).json(expenses);
  }
  async getById(request: Request, response: Response) {
    const { id } = request.params;

    const expense = await this.repo.getById(id);

    return response.status(200).json(expense);
  }
  async create(request: Request, response: Response) {
    const { description, amount, date } = request.body;

    const alreadyExists = await this.repo.getByDescription(description);

    if (alreadyExists)
      return response.status(400).json({ message: "Expense already exists" });

    await this.repo.create({ description, amount, date });

    return response.status(201).json({ message: "Expense created" });
  }
}

export default new ExpenseController();
