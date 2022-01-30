import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteIncomeUseCase } from "./DeleteIncomeUseCase";

class DeleteIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteIncomeUseCase = container.resolve(DeleteIncomeUseCase);

    await deleteIncomeUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteIncomeController };
