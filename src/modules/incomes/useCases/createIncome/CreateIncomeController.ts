import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateIncomeUseCase } from "./CreateIncomeUseCase";

class CreateIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, amount, date } = request.body;

    const createIncomeUseCase = container.resolve(CreateIncomeUseCase);

    await createIncomeUseCase.execute({ description, amount, date });

    return response.status(201).send();
  }
}

export { CreateIncomeController };
