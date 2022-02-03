import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIncomesByMonthUseCase } from "./ListIncomesByMonthUseCase";

class ListIncomesByMonthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { year, month } = request.params;

    const listIncomeUseCase = container.resolve(ListIncomesByMonthUseCase);

    const incomes = await listIncomeUseCase.execute(Number(year), month);

    return response.status(200).json(incomes);
  }
}

export { ListIncomesByMonthController };
