import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListExpenseUseCase } from "./ListExpenseUseCase";

class ListExpenseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.query;

    const listExpenseUseCase = container.resolve(ListExpenseUseCase);

    const expenses = await listExpenseUseCase.execute(description);

    return response.status(200).json(expenses);
  }
}

export { ListExpenseController };
