import { Income } from "../entities/Income";

interface ICreateIncomeDTO {
  description: string;
  amount: number;
  date: Date;
}

interface IUpdateIncomeDTO extends ICreateIncomeDTO {
  id: string;
}

interface IIncomesRepository {
  getAll(): Promise<Income[]>;
  getAllByDescription(description: string): Promise<Income[]>;
  getAllByMonth(year: number, month: string): Promise<Income[]>;
  getById(id: string): Promise<Income>;
  getByDescription(description: string): Promise<Income>;
  create({ description, amount, date }: ICreateIncomeDTO): Promise<void>;
  update({ description, amount, date }: IUpdateIncomeDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICreateIncomeDTO, IUpdateIncomeDTO, IIncomesRepository };
