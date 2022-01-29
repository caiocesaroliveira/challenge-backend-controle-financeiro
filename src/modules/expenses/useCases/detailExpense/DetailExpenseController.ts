import { Request, Response } from "express";
import { container } from "tsyringe";

import { DetailExpenseUseCase } from "./DetailExpenseUseCase";

class DetailExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const detailExpenseUseCase = container.resolve(DetailExpenseUseCase);

    const expenses = await detailExpenseUseCase.execute(id);

    return response.status(200).json(expenses);
  }
}

export { DetailExpenseController };
