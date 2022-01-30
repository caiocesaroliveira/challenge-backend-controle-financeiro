import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateExpenseUseCase } from "./UpdateExpenseUseCase";

class UpdateExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, amount, date } = request.body;

    const updateExpenseUseCase = container.resolve(UpdateExpenseUseCase);

    await updateExpenseUseCase.execute({ id, description, amount, date });

    return response.status(204).send();
  }
}

export { UpdateExpenseController };
