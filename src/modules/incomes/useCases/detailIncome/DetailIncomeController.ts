import { Request, Response } from "express";
import { container } from "tsyringe";

import { DetailIncomeUseCase } from "./DetailIncomeUseCase";

class DetailIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const detailIncomeUseCase = container.resolve(DetailIncomeUseCase);

    const incomes = await detailIncomeUseCase.execute(id);
    if (!incomes) return response.status(404).json(incomes);

    return response.status(200).json(incomes);
  }
}

export { DetailIncomeController };
