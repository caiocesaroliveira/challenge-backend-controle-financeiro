import { inject, injectable } from "tsyringe";

import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

@injectable()
class ListIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute(): Promise<Income[]> {
    const incomes = await this.incomeRepository.getAll();
    return incomes;
  }
}

export { ListIncomeUseCase };
