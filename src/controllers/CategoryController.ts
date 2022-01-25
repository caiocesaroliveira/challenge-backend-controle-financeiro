import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import CategoryRepository from "../repositories/CategoryRepository";

class CategoryController {
  async create(request: Request, response: Response) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const { description, type } = request.body;

    const alreadyExists = await categoryRepository.findOne({
      description,
      type,
    });

    if (alreadyExists)
      return response.status(400).json({ message: "Category already exists" });

    const newCategory = categoryRepository.create({
      description,
      type,
    });

    await categoryRepository.save(newCategory);

    return response.status(201).json(newCategory);
  }

  async getAll(request: Request, response: Response) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categories = await categoryRepository.find();

    return response.status(200).json(categories);
  }

  async getById(request: Request, response: Response) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const { id } = request.params;

    const category = await categoryRepository.findOne({ id });

    return response.status(200).json(category);
  }
}
export default new CategoryController();
