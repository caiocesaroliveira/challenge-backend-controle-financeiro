import { Expense } from "../entities/Expense";

interface ICreateExpenseDTO {
  description: string;
  amount: number;
  date: Date;
}

interface IUpdateExpenseDTO extends ICreateExpenseDTO {
  id: string;
}

interface IExpensesRepository {
  getAll(): Promise<Expense[]>;
  getById(id: string): Promise<Expense>;
  getByDescription(description: string): Promise<Expense>;
  create({ description, amount, date }: ICreateExpenseDTO): Promise<void>;
  update({ description, amount, date }: IUpdateExpenseDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICreateExpenseDTO, IUpdateExpenseDTO, IExpensesRepository };
