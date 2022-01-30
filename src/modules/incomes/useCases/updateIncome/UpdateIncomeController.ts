import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateIncomeUseCase } from "./UpdateIncomeUseCase";

class UpdateIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, amount, date } = request.body;

    const updateIncomeUseCase = container.resolve(UpdateIncomeUseCase);

    await updateIncomeUseCase.execute({ id, description, amount, date });

    return response.status(204).send();
  }
}

export { UpdateIncomeController };
