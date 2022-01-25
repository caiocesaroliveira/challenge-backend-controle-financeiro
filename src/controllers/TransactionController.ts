import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import TransactionRepository from "../repositories/TransactionRepository";

class TransactionController {
  async create(request: Request, response: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const { description, amount, date, category_id } = request.body;

    // const newDate = new Date(date).getMonth();

    // console.log(newDate);

    const alreadyExists = await transactionRepository.findOne({
      description,
    });

    // const alreadyExists2 = await transactionRepository.find({
    //   where: {
    //     date: Like(`%-${newDate}-%`),
    //   },
    // });

    if (alreadyExists)
      return response
        .status(400)
        .json({ message: "Transaction already exists" });

    const newTransaction = transactionRepository.create({
      description,
      amount,
      date,
      category: {
        id: category_id,
      },
    });

    await transactionRepository.save(newTransaction);

    return response.status(201).json(newTransaction);
  }
  async getAll(request: Request, response: Response) {
    // const { type } = request.query;
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactions = await transactionRepository.find({
      // relations: ["category"],
      // where: {
      //   category: {
      //     type,
      //   },
      // },
    });

    return response.status(200).json(transactions);
  }

  async getById(request: Request, response: Response) {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const { id } = request.params;

    const transaction = await transactionRepository.findOne({ id });

    return response.status(200).json(transaction);
  }
}
export default new TransactionController();
