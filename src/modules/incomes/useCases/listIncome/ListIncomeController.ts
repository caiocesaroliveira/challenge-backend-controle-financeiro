import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncomeUseCase } from "./ListIncomeUseCase";

class ListIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listIncomeUseCase = container.resolve(ListIncomeUseCase);

    const incomes = await listIncomeUseCase.execute();

    return response.status(200).json(incomes);
  }
}

export { ListIncomeController };
