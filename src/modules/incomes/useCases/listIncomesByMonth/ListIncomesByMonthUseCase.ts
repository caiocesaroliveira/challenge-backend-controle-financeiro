import { inject, injectable } from "tsyringe";

import { Income } from "../../entities/Income";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";

@injectable()
class ListIncomesByMonthUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute(year: number, month: string): Promise<Income[]> {
    const incomes = await this.incomeRepository.getAllByMonth(year, month);

    return incomes;
  }
}

export { ListIncomesByMonthUseCase };
