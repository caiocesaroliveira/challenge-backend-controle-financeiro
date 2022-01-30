import { inject, injectable } from "tsyringe";

import { IIncomesRepository } from "../../repositories/IIncomesRepository";

interface ICreateIncomeRequest {
  description: string;
  amount: number;
  date: Date;
}

@injectable()
class CreateIncomeUseCase {
  constructor(
    @inject("IncomesRepository")
    private incomeRepository: IIncomesRepository
  ) {}

  async execute({
    description,
    amount,
    date,
  }: ICreateIncomeRequest): Promise<void> {
    if (!description)
      throw new Error("Invalid description. Description is required");
    if (!amount) throw new Error("Invalid amount. Amount is required");
    if (!description) throw new Error("Invalid date. Date is required");

    const incomeAlreadyExists = await this.incomeRepository.getByDescription(
      description
    );

    if (incomeAlreadyExists) throw new Error("Income already exists.");

    await this.incomeRepository.create({
      description,
      amount,
      date,
    });
  }
}

export { CreateIncomeUseCase };
