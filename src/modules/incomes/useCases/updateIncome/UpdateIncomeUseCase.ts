import { inject, injectable } from "tsyringe";

import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface IUpdateIncomeRequest {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

@injectable()
class UpdateIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute({
    id,
    description,
    amount,
    date,
  }: IUpdateIncomeRequest): Promise<void> {
    const income = await this.incomeRepository.getById(id);
    if (!income) throw new Error("Income not found.");

    if (!description)
      throw new Error("Invalid description. Description is required");
    if (!amount) throw new Error("Invalid amount. Amount is required");
    if (!description) throw new Error("Invalid date. Date is required");

    await this.incomeRepository.update({ id, description, amount, date });
  }
}

export { UpdateIncomeUseCase };
