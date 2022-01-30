import { inject, injectable } from "tsyringe";

import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

@injectable()
class DetailIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute(id: string): Promise<Income> {
    const income = await this.incomeRepository.getById(id);
    return income;
  }
}

export { DetailIncomeUseCase };
