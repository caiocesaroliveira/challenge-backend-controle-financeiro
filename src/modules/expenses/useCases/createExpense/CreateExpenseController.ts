import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateExpenseUseCase } from "./CreateExpenseUseCase";

class CreateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, amount, date, category } = request.body;

    const createExpenseUseCase = container.resolve(CreateExpenseUseCase);

    await createExpenseUseCase.execute({ description, amount, date, category });

    return response.status(201).send();
  }
}

export { CreateExpenseController };
