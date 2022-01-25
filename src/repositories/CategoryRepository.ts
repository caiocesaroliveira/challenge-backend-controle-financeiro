import { EntityRepository, Repository } from "typeorm";

import { CategoryEntity } from "../entities/CategoryEntity";

@EntityRepository(CategoryEntity)
class CategoryRepository extends Repository<CategoryEntity> {}

export default CategoryRepository;
