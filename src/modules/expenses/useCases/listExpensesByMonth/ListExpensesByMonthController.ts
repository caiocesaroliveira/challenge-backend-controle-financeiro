import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListExpensesByMonthUseCase } from "./ListExpensesByMonthUseCase";

class ListExpensesByMonthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { year, month } = request.params;

    const listExpenseUseCase = container.resolve(ListExpensesByMonthUseCase);

    const expenses = await listExpenseUseCase.execute(Number(year), month);

    return response.status(200).json(expenses);
  }
}

export { ListExpensesByMonthController };
