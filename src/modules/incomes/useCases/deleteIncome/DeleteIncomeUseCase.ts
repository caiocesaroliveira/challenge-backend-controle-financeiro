import { inject, injectable } from "tsyringe";

import { IIncomesRepository } from "../../repositories/IIncomesRepository";

@injectable()
class DeleteIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const income = await this.incomeRepository.getById(id);
    if (!income) throw new Error("Income not found.");

    await this.incomeRepository.delete(id);
  }
}

export { DeleteIncomeUseCase };
