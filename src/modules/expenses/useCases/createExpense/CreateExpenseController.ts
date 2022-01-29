import { Request, Response } from "express";

import { CreateExpenseUseCase } from "./CreateExpenseUseCase";

class CreateExpenseController {
  constructor(private createExpenseUseCase: CreateExpenseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, amount, date } = request.body;

    await this.createExpenseUseCase.execute({ description, amount, date });

    return response.status(201).send();
  }
}

export { CreateExpenseController };
