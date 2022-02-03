import { inject, injectable } from "tsyringe";

import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

@injectable()
class ListIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute(description): Promise<Income[]> {
    let incomes: Income[];

    if (description) {
      incomes = await this.incomeRepository.getAllByDescription(description);
    } else {
      incomes = await this.incomeRepository.getAll();
    }

    return incomes;
  }
}

export { ListIncomeUseCase };
